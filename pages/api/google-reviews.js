import fs from 'fs'
import path from 'path'

const API_KEY = process.env.GOOGLE_PLACES_API_KEY
const PLACE_ID = process.env.GOOGLE_PLACE_ID // or search by text
const CACHE_DURATION_MS = 60 * 60 * 1000 // 1 hour

let cachedReviews = null
let cachedAt = 0

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const now = Date.now()

  if (cachedReviews && (now - cachedAt < CACHE_DURATION_MS)) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({ data: cachedReviews })
  }

  const dataDir = path.join(process.cwd(), 'data')
  const jsonPath = path.join(dataDir, 'google_reviews.json')

  // 1. Read stored JSON reviews file first
  let storedReviews = []
  if (fs.existsSync(jsonPath)) {
    try {
      const fileData = fs.readFileSync(jsonPath, 'utf8')
      storedReviews = JSON.parse(fileData) || []
    } catch (readErr) {
      console.error('Failed to read google_reviews.json:', readErr)
    }
  }

  // 2. If API Key is configured and working, attempt live fetch
  if (API_KEY) {
    try {
      let targetPlaceId = PLACE_ID

      if (!targetPlaceId) {
        const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Amardip%20Elevators%20Kadapa&inputtype=textquery&fields=place_id&key=${API_KEY}`
        const findRes = await fetch(findUrl)
        const findData = await findRes.json()
        if (findData.candidates && findData.candidates.length > 0) {
          targetPlaceId = findData.candidates[0].place_id
        }
      }

      if (targetPlaceId) {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${targetPlaceId}&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}`
        const detailsRes = await fetch(detailsUrl)
        const detailsData = await detailsRes.json()

        if (detailsData.result && detailsData.result.reviews) {
          const liveReviews = detailsData.result.reviews.map((r, idx) => ({
            id: `api_${idx}`,
            name: r.author_name,
            initial: r.author_name ? r.author_name.charAt(0) : 'G',
            avatar: r.profile_photo_url,
            rating: r.rating,
            date: r.relative_time_description,
            comment: r.text,
            location: 'Kadapa'
          }))

          if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
          fs.writeFileSync(jsonPath, JSON.stringify(liveReviews, null, 2))
          cachedReviews = liveReviews
          cachedAt = now
          return res.status(200).json({ data: liveReviews })
        }
      }
    } catch (apiErr) {
      console.error('Google Places API error:', apiErr)
    }
  }

  // 3. Fallback to stored JSON reviews
  if (storedReviews.length > 0) {
    cachedReviews = storedReviews
    cachedAt = now
    return res.status(200).json({ data: storedReviews })
  }

  return res.status(200).json({ data: [] })
}
