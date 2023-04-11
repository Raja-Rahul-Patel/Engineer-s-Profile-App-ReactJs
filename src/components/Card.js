import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>

        <div className='absolute top-[-7rem] z-[10] mx-auto2'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image} alt=""></img>
            <div className='w-[140px] h-[140px] bg-yellow-500 rounded-full absolute top-[-6px] z-[-1] left-[10px]'></div>
        </div>
        
        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl capatilize'>{review.name}</p>
            <p className='text-blue-500 uppercase text-sm mt-2'>{review.job}</p>
        </div>

        <div className="text-yellow-400 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
        </div>

        <div className='text-center mt-4 text-slate-500'>
          {review.text}
        </div>

        <div className="text-yellow-400 mx-auto mt-5">
          <FaQuoteRight></FaQuoteRight>
        </div>
       
    </div>
  )
}

export default Card