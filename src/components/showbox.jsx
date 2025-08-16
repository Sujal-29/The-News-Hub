import React from 'react'
import  Card  from './card'


   
function Showbox({ articles }) {
  return (
    <div className=' mx-4 flex flex-wrap justify-center gap-16 mt-8'>
    {articles?.map((article,index)=>(
      <Card key={index} article={article} />
    )
    )}
    </div>
  )
}
export default Showbox;
