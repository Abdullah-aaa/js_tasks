"use client"
import { useState } from "react"

const FaqBlog = () => {

    const [isopen, setIsopen]=useState(false)
    const handlepara=()=>{
        setIsopen(!isopen) 
    }

  return (
    <div className=" p-8 "  onClick={handlepara}>
    <div >
        <h1 className=" font-extrabold text-xl bg-blue-950 p-5">what will happen if this</h1>
    </div>
        {/* <div>
    { isopen &&
        <p className=" bg-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam minus dicta quis deleniti odit error illo consequuntur dolore vitae illum, dolor ducimus molestiae itaque molestias. Quibusdam facilis autem ipsa!</p>
    }
        </div> we can also do like this in classname {} with backtikes.....its know as condtional styling*/}
                                                                                    {/* max-h-[78px] means we can set value in custom numbers as our will.....we also use max-h becasue duration-300 wont work wit simple h-auto,0,2 etc but it work with width  */}
        <div className={` bg-blue-700 overflow-hidden duration-700 ${isopen?" max-h-48":"max-h-0"}`}>
    {
        <p className=" p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam minus dicta quis deleniti odit error illo consequuntur dolore vitae illum, dolor ducimus molestiae itaque molestias. Quibusdam facilis autem ipsa!</p>
    }
        </div>
    </div>
  )
}

export default FaqBlog