/*
  Instagram Feed Sync

  Fetches the latest posts from the public Instagram profile (no login
  required), downloads the image media assets to the local workspace
  (public/instagram/), saves details to data/instagram.json, and caches
  the result in-memory for 1 hour to avoid rate limits.
*/
import fs from 'fs'
import path from 'path'

const USERNAME = 'amardip.elevators'
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
const CACHE_DURATION_MS = 60 * 60 * 1000 // 1 hour

let cachedPosts = null
let cachedAt = 0

// Helper to download image to local public folder
async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Status ${res.status}`)
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    fs.writeFileSync(destPath, buffer)
    console.log(`Successfully downloaded Instagram image to: ${destPath}`)
  } catch (err) {
    console.error(`Failed to download image from ${url}:`, err)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const now = Date.now()

  // 1. Return memory cache if fresh
  if (cachedPosts && (now - cachedAt < CACHE_DURATION_MS)) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({ data: cachedPosts })
  }

  // Define paths
  const dataDir = path.join(process.cwd(), 'data')
  const jsonPath = path.join(dataDir, 'instagram.json')
  const publicDestDir = path.join(process.cwd(), 'public', 'instagram')

  // Make sure directories exist
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  if (!fs.existsSync(publicDestDir)) fs.mkdirSync(publicDestDir, { recursive: true })

  try {
    console.log(`Syncing Instagram feed for ${USERNAME}...`)

    const profileResponse = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
      {
        headers: {
          'User-Agent': USER_AGENT,
          'X-IG-App-ID': '936619743392459',
          'Accept': '*/*',
          'Referer': `https://www.instagram.com/${USERNAME}/`,
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
        },
      }
    )

    if (!profileResponse.ok) {
      throw new Error(`Profile fetch failed with status ${profileResponse.status}`)
    }

    const profileData = await profileResponse.json()
    const edges = profileData?.data?.user?.edge_owner_to_timeline_media?.edges || []

    const posts = []
    for (const { node: item } of edges) {
      const caption = item.edge_media_to_caption?.edges?.[0]?.node?.text || ''
      const original_media_url = item.display_url || item.thumbnail_src || ''
      const media_type = item.is_video ? 'VIDEO' : 'IMAGE'

      const cleanId = item.id.replace(/[^a-zA-Z0-9_-]/g, '_')
      const localFileName = `${cleanId}.jpg`
      const localFilePath = path.join(publicDestDir, localFileName)
      const localPublicUrl = `/instagram/${localFileName}`

      if (original_media_url && !fs.existsSync(localFilePath)) {
        await downloadImage(original_media_url, localFilePath)
      }

      posts.push({
        id: item.id,
        caption,
        media_type,
        media_url: localPublicUrl,
        permalink: `https://www.instagram.com/p/${item.shortcode}/`,
        preview_url: localPublicUrl,
        timestamp: item.taken_at_timestamp,
      })
    }

    if (posts.length === 0) {
      throw new Error('No posts returned from Instagram profile.')
    }

    // Save to persistent json file
    fs.writeFileSync(jsonPath, JSON.stringify(posts, null, 2))

    // Update memory cache
    cachedPosts = posts
    cachedAt = now

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({ data: posts })
  } catch (error) {
    console.error('Instagram sync encountered an error, falling back to local storage:', error.message)

    // Fallback to local stored JSON
    if (fs.existsSync(jsonPath)) {
      try {
        const fileData = fs.readFileSync(jsonPath, 'utf8')
        const fallbackPosts = JSON.parse(fileData)
        if (fallbackPosts && fallbackPosts.length > 0) {
          // Temporarily cache fallback so we don't spam attempts on failure
          cachedPosts = fallbackPosts
          cachedAt = now

          res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
          return res.status(200).json({ data: fallbackPosts })
        }
      } catch (readErr) {
        console.error('Failed to read fallback instagram.json:', readErr)
      }
    }

    return res.status(500).json({ error: 'Failed to load Instagram feed.' })
  }
}
