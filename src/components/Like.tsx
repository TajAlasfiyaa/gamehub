import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import React, { useState } from 'react'
interface Props {
  onClick : () => void
}
const  Like = ({onClick}:Props) => {
  const [like , setLike ] = useState(false)
  return (
    
   (like) ? <BsHeartFill onClick={()=> setLike(false)} /> : <BsHeart onClick={()=>setLike(true)} />
  )
}

export default  Like