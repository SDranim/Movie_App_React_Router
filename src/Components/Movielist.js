import React from 'react'
import Moviecard from './Moviecard'

function Movielist({movies,search}) {
  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap' , gap:'20px' , alignItems:'center' , margin:'20px'}}>
        {movies.filter((mv)=>mv.title.toLowerCase().includes(search.toLowerCase())).map((el,index)=><Moviecard el={el} key={index}/>)}
    </div>
  )
}

export default Movielist