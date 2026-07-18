/*
  Instagram feed setup

  1. Convert the client's Instagram account to a Business or Creator account:
     Instagram app > Settings > Account type and tools > Switch to professional account.

  2. Register an app at https://developers.facebook.com/, add the
     "Instagram API with Instagram Login" product, and generate a long-lived
     access token for the client's Instagram Business or Creator account.

  3. Add the token to your environment:
     INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token

  4. Long-lived Instagram tokens expire after 60 days. Set up a cron job to
     refresh the token before it expires using the official refresh endpoint.

  Note: Do not use the retired Instagram Basic Display API. It was shut down
  on December 4, 2024.
*/

const INSTAGRAM_MEDIA_URL = 'https://graph.instagram.com/me/media'
const CACHE_TTL_MS = 60 * 60 * 1000

let cachedFeed = null
let cachedAt = 0

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    return res.status(500).json({
      error: 'Instagram access token is not configured.',
    })
  }

  const now = Date.now()

  if (cachedFeed && now - cachedAt < CACHE_TTL_MS) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json(cachedFeed)
  }

  const params = new URLSearchParams({
    fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp',
    access_token: accessToken,
  })

  try {
    const instagramResponse = await fetch(`${INSTAGRAM_MEDIA_URL}?${params}`)
    const payload = await instagramResponse.json()

    if (!instagramResponse.ok) {
      return res.status(instagramResponse.status).json({
        error: payload?.error?.message || 'Unable to fetch Instagram media.',
      })
    }

    const posts = (payload.data || []).map((post) => ({
      id: post.id,
      caption: post.caption || '',
      media_type: post.media_type,
      media_url: post.media_url,
      permalink: post.permalink,
      thumbnail_url: post.thumbnail_url || null,
      preview_url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      timestamp: post.timestamp,
    }))

    cachedFeed = {
      data: posts,
      paging: payload.paging || null,
    }
    cachedAt = now

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json(cachedFeed)
  } catch (error) {
    return res.status(500).json({
      error: 'Instagram feed request failed.',
    })
  }
}
