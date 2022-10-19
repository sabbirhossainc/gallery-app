import React from 'react'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center shadow-md w-full">
      <h1 className="font-bold uppercase text-2xl text-center md:text-5xl px-5 md:px-60 py-5 md:py-24 bg-teal-500">
        <span className='leading-snug tracking-widest text-indigo-500'>
        Wellcome 
        </span>
        <br className='md:hidden'/>
        <span className='leading-snug md:px-3 text-slate-900'>
            to
            </span>
        <br className='md:hidden'/> 
       <span className='leading-snug text-slate-100'>
        photo  gallery
        </span>
        </h1>
      </div>
  )
}

export default Hero;