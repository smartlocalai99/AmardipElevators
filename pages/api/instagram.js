/*
  Instagram Automated Feed Sync
  
  This API dynamically logs into Instagram using username and password,
  fetches the latest user timeline posts, downloads the image media assets
  to the local workspace (public/instagram/), saves details to data/instagram.json,
  and caches the result in-memory for 1 hour to avoid API rate limits.
*/
import fs from 'fs'
import path from 'path'

const USERNAME = 'amardip.elevators'
const PASSWORD = 'amardip@7'
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
    console.log(`Automatically syncing Instagram feed for ${USERNAME}...`)

    // Step A: Get initial cookies and CSRF token
    const initResponse = await fetch('https://www.instagram.com/', {
      headers: { 'User-Agent': USER_AGENT }
    })
    
    const setCookieHeaders = initResponse.headers.getSetCookie 
      ? initResponse.headers.getSetCookie() 
      : (initResponse.headers.get('set-cookie') || '').split(/,\s*/)
      
    let csrfToken = ''
    for (const cookie of setCookieHeaders) {
      if (cookie.includes('csrftoken=')) {
        csrfToken = cookie.split('csrftoken=')[1].split(';')[0]
      }
    }
    
    if (!csrfToken) {
      const html = await initResponse.text()
      const match = html.match(/"csrf_token":"([^"]+)"/)
      if (match) csrfToken = match[1]
    }

    // Step B: Perform login request
    const timestamp = Math.floor(Date.now() / 1000)
    const encPassword = `#PWD_INSTAGRAM_BROWSER:0:${timestamp}:${PASSWORD}`

    const loginResponse = await fetch('https://www.instagram.com/api/v1/web/accounts/login/ajax/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': USER_AGENT,
        'X-CSRFToken': csrfToken || '',
        'Referer': 'https://www.instagram.com/',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: new URLSearchParams({
        username: USERNAME,
        enc_password: encPassword,
        queryParams: '{}',
        optIntoOneTap: 'false'
      })
    })

    const loginResult = await loginResponse.json()

    if (loginResult.authenticated) {
      const loginCookies = loginResponse.headers.getSetCookie 
        ? loginResponse.headers.getSetCookie() 
        : (loginResponse.headers.get('set-cookie') || '').split(/,\s*/)
        
      let cookieString = ''
      for (const cookie of loginCookies) {
        const parts = cookie.split(';')[0]
        cookieString += parts + '; '
      }

      const userId = loginResult.userId || '68405948240'

      // Step C: Fetch direct user feed
      const feedResponse = await fetch(`https://www.instagram.com/api/v1/feed/user/${userId}/`, {
        headers: {
          'User-Agent': USER_AGENT,
          'Cookie': cookieString,
          'X-IG-App-ID': '936619743392459',
          'X-Requested-With': 'XMLHttpRequest',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin'
        }
      })

      const feedData = await feedResponse.json()
      const items = feedData.items || []

      // Step D: Map and download images locally
      const posts = []
      for (const item of items) {
        const caption = item.caption?.text || ''
        
        let original_media_url = ''
        if (item.image_versions2?.candidates?.length > 0) {
          original_media_url = item.image_versions2.candidates[0].url
        } else if (item.carousel_media?.[0]?.image_versions2?.candidates?.length > 0) {
          original_media_url = item.carousel_media[0].image_versions2.candidates[0].url
        }

        let media_type = 'IMAGE'
        if (item.media_type === 2) {
          media_type = 'VIDEO'
        }

        // Local filename based on post id
        const cleanId = item.id.replace(/[^a-zA-Z0-9_-]/g, '_')
        const localFileName = `${cleanId}.jpg`
        const localFilePath = path.join(publicDestDir, localFileName)
        const localPublicUrl = `/instagram/${localFileName}`

        // Download only if file doesn't exist
        if (original_media_url && !fs.existsSync(localFilePath)) {
          await downloadImage(original_media_url, localFilePath)
        }

        posts.push({
          id: item.id,
          caption,
          media_type,
          media_url: localPublicUrl,
          permalink: `https://www.instagram.com/p/${item.code}/`,
          preview_url: localPublicUrl,
          timestamp: item.taken_at
        })
      }

      // Save to persistent json file
      fs.writeFileSync(jsonPath, JSON.stringify(posts, null, 2))
      
      // Update memory cache
      cachedPosts = posts
      cachedAt = now

      res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
      return res.status(200).json({ data: posts })
    } else {
      console.warn("Instagram dynamic authentication failed:", loginResult.message)
      throw new Error(loginResult.message || "Authentication failed")
    }

  } catch (error) {
    console.error("Instagram auto-sync encountered an error, falling back to local storage:", error.message)
    
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
        console.error("Failed to read fallback instagram.json:", readErr)
      }
    }

    return res.status(500).json({ error: "Failed to load Instagram feed." })
  }
}
