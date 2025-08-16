import React from 'react'

 const Navbar = (props) => {
  const Reload=()=>{
    window.location.reload();
  }

  function handlepress(e){
    if(e.key === 'Enter') {props.handleSearch()};
     
  }
  return(
    <div className='mb-2 bg-[#122929] border-b-4 border-b-white'>
      <div className='max-md:flex max-md:justify-center'>
        <img src='thenewshub.png' className='max-md:mr-1 p-3 ml-4'/>
        </div>
        <div className='max-md:mt-8 max-md:mb-3 text-right py-2 space-x-3 mr-10'> 
        <input id="search-text" type="text" className='max-md:px-3 p-3 px-10 rounded-full border border-black border-2xl'  placeholder='eg. Anime, TV'  onKeyDown={handlepress} ></input>
        <button id="search-btn" onClick={props.handleSearch} className='bg-orange-700 rounded-full border border-2xl font-semibold py-3 m-4 px-5 border-black'>Search</button>
       </div>
    </div>
  )}

export default Navbar;
