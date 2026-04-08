export default async function handler(req, res) {
  // Enable CORS for any frontend requests; not required on same-origin, but safe.
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  const API_KEY = process.env.VITE_API_KEY || process.env.VITE_GNEWS_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: 'Missing API key in environment variables.' });
  }

  const searchParams = req.query || new URL(req.url, 'http://localhost').searchParams;
  const q = searchParams.q || 'india';
  const lang = searchParams.lang || 'en';
  const max = searchParams.max || 10;

  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=${lang}&max=${max}&token=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Backend fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}