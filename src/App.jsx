import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Showbox from './components/showbox'
// import './App.css'


function App() {
  let [news,setNews] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? true : false;
  });
  let [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  let [showBookmarks, setShowBookmarks] = useState(false);

 const API_KEY = import.meta.env.VITE_API_KEY;
 const URL = import.meta.env.VITE_API_URL;

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.some(b => b.url === article.url);
    let updatedBookmarks;
    
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter(b => b.url !== article.url);
    } else {
      updatedBookmarks = [...bookmarks, article];
    }
    
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const isBookmarked = (article) => {
    return bookmarks.some(b => b.url === article.url);
  };


  async function fetchNews(query){
    try {
      setLoading(true);
      setError(null);
      let newsUrl  = `${URL}?q=${query}&lang=en&country=us&max=100&apikey=${API_KEY}`;
      let res = await fetch(newsUrl);
      
      if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
      }
      
      let data = await res.json();
      
      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
      } else {
        setNews([]);
        setError('No articles found for this search. Try a different topic!');
      }
    } catch(err) {
      console.error('Error fetching news:', err);
      setError(`Failed to fetch news: ${err.message}`);
      setNews([]);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    fetchNews('India');
  },[]); 

  const handleSearch=()=>{
    let query = document.getElementById("search-text").value;
    if (!query) query = 'India';
      fetchNews(query);
  };


  

  return (
    <div className={darkMode ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
      <Navbar 
        handleSearch={handleSearch} 
        darkMode={darkMode} 
        toggleTheme={toggleTheme}
        showBookmarks={showBookmarks}
        setShowBookmarks={setShowBookmarks}
        bookmarkCount={bookmarks.length}
      />
      
      {showBookmarks ? (
        <div>
          <div className={`mx-4 mt-4 p-4 rounded-lg ${darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-900'}`}>
            <p className='text-lg font-semibold'>📚 Saved Articles ({bookmarks.length})</p>
          </div>
          
          {bookmarks.length === 0 ? (
            <div className='flex justify-center items-center h-screen'>
              <div className='text-center'>
                <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl`}>No bookmarks yet</p>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Save articles to read them later!</p>
              </div>
            </div>
          ) : (
            <Showbox 
              articles={bookmarks} 
              darkMode={darkMode}
              toggleBookmark={toggleBookmark}
              isBookmarked={isBookmarked}
            />
          )}
        </div>
      ) : (
        <>
          {loading && (
            <div className='flex justify-center items-center h-screen'>
              <div className='text-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
                <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg`}>Loading news...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className={`mx-4 mt-8 p-4 rounded-lg text-center ${darkMode ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800'}`}>
              <p className='text-lg font-semibold'>⚠️ {error}</p>
            </div>
          )}
          
          {!loading && news.length === 0 && !error && (
            <div className='flex justify-center items-center h-screen'>
              <div className='text-center'>
                <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl`}>No articles found</p>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Try searching for a different topic</p>
              </div>
            </div>
          )}
          
          {!loading && news.length > 0 && (
            <Showbox 
              articles={news} 
              darkMode={darkMode}
              toggleBookmark={toggleBookmark}
              isBookmarked={isBookmarked}
            />
          )}
        </>
      )}
    </div>
  )
}

export default App
