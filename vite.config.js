import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/news': {
          target: 'https://gnews.io/api/v4',
          changeOrigin: true,
          rewrite: (path) => {
            const url = new URL(path, 'http://localhost');
            const params = url.searchParams;
            const q = params.get('q') || 'india';
            const lang = params.get('lang') || 'en';
            const max = params.get('max') || '10';
            const apiKey = env.VITE_API_KEY;

            return `/search?q=${encodeURIComponent(q)}&lang=${lang}&max=${max}&token=${apiKey}`;
          },
        },
      },
    },
  }
})
