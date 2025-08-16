
import React from 'react'

 const Card = ({ article })=> {
  
    if(!article.image)return ;
     
    let date = new Date(article.publishedAt).toLocaleString('en-us',{
        timezone : "Asia/Jakarta"
     });



  return (
    

<div className=" max-w-sm bg-[#17131e] border border-gray-200 rounded-lg shadow hover:scale-[1.05] transition-transform duration-300  dark:border-gray-700">

        <img className="rounded-t-lg" src={article.image} alt="News related image" />
    
    <div className="p-5 ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
        </a>

          <p className='text-white py-3'>{article.source.name}&nbsp;-&nbsp;{date}</p>
         
    
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
        <div className='text-center mt-2'>
        <a href={article.url} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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