import React from 'react'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center shadow-md w-full">
      <h1 className="font-bold uppercase text-2xl text-center text-slate-50 md:text-5xl px-5 md:px-60 py-5 md:py-8 bg-indigo-800">
        <span className='leading-snug tracking-widest'>
        Wellcome 
        </span>
        <br/>
        <span className='leading-snug'>
            to
            </span>
        <br/> 
       <span className='leading-snug '>
        photo gallery
        </span>
        </h1>
      </div>
  )
}

export default Hero;