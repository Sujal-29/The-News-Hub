import React from 'react'
import  Card  from './card'


   
function Showbox({ articles, darkMode, toggleBookmark, isBookmarked }) {
  return (
    <div className={`mx-4 flex flex-wrap justify-center gap-16 mt-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
    {articles?.map((article,index)=>(
      <Card 
        key={index} 
        article={article} 
        darkMode={darkMode}
        toggleBookmark={toggleBookmark}
        isBookmarked={isBookmarked}
      />
    )
    )}
    </div>
  )
}
export default Showbox;
