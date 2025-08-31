# News-Hub

## Project Purpose

News-Hub is a modern, responsive web application that serves as a centralized platform for users to browse, search, and read news articles from various global sources. It provides an intuitive interface to stay updated with the latest news on topics of interest.

## What the Project Does

- **News Fetching**: Retrieves news articles from the GNews API based on user-defined search queries
- **Search Functionality**: Allows users to search for news on specific topics (e.g., "Anime", "TV", "Politics")
- **Article Display**: Presents news articles in an attractive card-based layout featuring:
  - Article images
  - Headlines and descriptions
  - Source information and publication dates
  - Direct links to full articles
- **Default Content**: Loads news about "India" by default on application startup
- **Responsive Design**: Optimized for various screen sizes including mobile devices
- **Real-time Updates**: Fetches up to 100 articles per search query

## Tech Stack

### Frontend Framework
- **React 18.3.1**: Modern JavaScript library for building user interfaces with hooks for state management

### Build Tool & Development
- **Vite 5.4.1**: Fast build tool and development server with Hot Module Replacement (HMR)
- **ESLint 9.9.0**: Code linting for maintaining code quality
- **PostCSS 8.4.41**: Tool for transforming CSS with JavaScript
- **Autoprefixer 10.4.20**: PostCSS plugin to parse CSS and add vendor prefixes

### Styling
- **Tailwind CSS 3.4.10**: Utility-first CSS framework for rapid UI development

### API Integration
- **GNews API**: External news API for fetching real-time news articles

## Project Structure

```
The-News-Hub/
├── public/
│   ├── thenewshub.png    # Application logo
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── card.jsx      # Individual news article card component
│   │   ├── navbar.jsx    # Navigation bar with search functionality
│   │   └── showbox.jsx   # Container for displaying news cards
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd The-News-Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Features

- 🔍 **Advanced Search**: Search news by keywords or topics
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Clean, dark-themed interface with smooth animations
- 🌐 **Global News**: Access news from various international sources
- 🔄 **Real-time Data**: Fetches latest news articles dynamically

## API Key Setup

The application uses the GNews API. Make sure to obtain an API key from [GNews](https://gnews.io/) and update the `API_KEY` variable in `src/App.jsx` if needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and for personal use.
