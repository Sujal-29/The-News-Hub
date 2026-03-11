
import React from 'react'

 const Card = ({ article, darkMode, toggleBookmark, isBookmarked })=> {
  
    if(!article.image)return ;
     
    let date = new Date(article.publishedAt).toLocaleString('en-us',{
        timezone : "Asia/Jakarta"
     });

    const bookmarked = isBookmarked(article);

  return (
    

<div className={`max-w-sm border rounded-lg shadow hover:scale-[1.05] transition-transform duration-300 relative ${darkMode ? 'bg-[#17131e] border-gray-700' : 'bg-white border-gray-300'}`}>
        
        <button
          onClick={() => toggleBookmark(article)}
          className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors ${bookmarked ? 'bg-red-500 text-white' : 'bg-gray-400 text-gray-800 hover:bg-gray-500'}`}
          title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? '❤️' : '🤍'}
        </button>

        <img className="rounded-t-lg" src={article.image} alt="News related image" />
    
    <div className="p-5 ">
        <a href="#">
            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>{article.title}</h5>
        </a>

          <p className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{article.source.name}&nbsp;-&nbsp;{date}</p>
         
    
        <p className={`mb-3 font-normal ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{article.description}</p>
        <div className='text-center mt-2'>
        <a href={article.url} target='_blank' className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg transition-colors ${darkMode ? 'text-white bg-blue-700 hover:bg-blue-800' : 'text-white bg-blue-600 hover:bg-blue-700'}`}>
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>

  )
}

export default Card