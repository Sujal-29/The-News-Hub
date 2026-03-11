export default async function handler(req, res) {
  const API_KEY = process.env.VITE_GNEWS_API_KEY;

  const url = `https://gnews.io/api/v4/search?q=india&lang=en&max=10&token=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}