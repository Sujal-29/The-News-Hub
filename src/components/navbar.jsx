import React from 'react'

 const Navbar = (props) => {
  const Reload=()=>{
    window.location.reload();
  }

  function handlepress(e){
    if(e.key === 'Enter') {props.handleSearch()};
     
  }

  const categories = [
    { name: 'Technology', icon: '💻' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Politics', icon: '🏛️' },
    { name: 'Entertainment', icon: '🎬' },
    { name: 'Business', icon: '💼' },
    { name: 'Health', icon: '⚕️' }
  ];

  const handleCategoryClick = (category) => {
    document.getElementById("search-text").value = category;
    props.handleSearch();
  };

  return(
    <div className={`mb-2 border-b-4 ${props.darkMode ? 'bg-[#122929] border-b-white' : 'bg-gray-200 border-b-gray-400'}`}>
      <div className='flex justify-between items-start px-4 py-3'>
        <div className='flex items-center cursor-pointer hover:opacity-80' onClick={Reload}>
          <span className='text-5xl md:text-7xl lg:text-9xl font-bold' style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className={props.darkMode ? 'text-white' : 'text-gray-900'}>The </span>
            <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>News</span>
            <span className={props.darkMode ? 'text-white' : 'text-gray-900'}> Hub</span>
          </span>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <button 
            onClick={() => props.setShowBookmarks(!props.showBookmarks)}
            className={`p-2 rounded-full transition-colors relative ${props.darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-300 text-blue-600 hover:bg-gray-400'}`}
            title="View Bookmarks"
          >
            📚
            {props.bookmarkCount > 0 && (
              <span className={`absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold ${props.darkMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white'}`}>
                {props.bookmarkCount}
              </span>
            )}
          </button>
          <button 
            onClick={props.toggleTheme}
            className={`p-2 rounded-full transition-colors ${props.darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-300 text-blue-600 hover:bg-gray-400'}`}
            title="Toggle Dark/Light Mode"
          >
            {props.darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      {!props.showBookmarks && (
        <>
          <div className='max-md:mt-4 max-md:mb-3 text-right py-2 space-x-3 mr-10'> 
            <input 
              id="search-text" 
              type="text" 
              className={`max-md:px-3 p-3 px-10 rounded-full border border-2xl ${props.darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-400'}`}
              placeholder='eg. Anime, TV'  
              onKeyDown={handlepress}
            />
            <button 
              id="search-btn" 
              onClick={props.handleSearch} 
              className={`rounded-full border border-2xl font-semibold py-3 m-4 px-5 transition-colors ${props.darkMode ? 'bg-orange-700 border-gray-600 text-white hover:bg-orange-600' : 'bg-orange-600 border-gray-400 text-white hover:bg-orange-700'}`}
            >
              Search
            </button>
           </div>

          <div className='px-4 py-3 flex flex-wrap gap-2 justify-center'>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${props.darkMode ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-400'}`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )}

export default Navbar;
