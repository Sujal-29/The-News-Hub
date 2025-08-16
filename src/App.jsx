import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Showbox from './components/showbox'
// import './App.css'


function App() {
  let [news,setNews] = useState([]);

 const API_KEY = 'f7f572217cdfcff48df4ef2fce4e6de8'
 const URL = 'https://gnews.io/api/v4/search?q='


  async function fetchNews(query){
    let newsUrl  = `${URL}${query}&lang=en&country=us&max=100&apikey=${API_KEY}`;
    let res = await fetch(newsUrl);
    let data = await res.json();
     setNews(data.articles);  
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
    <>
      <Navbar handleSearch={handleSearch} />
     <Showbox articles={news} />
  
  
   
     
    
    </>
  )
}

export default App
