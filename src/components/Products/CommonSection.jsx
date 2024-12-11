import React from 'react'

const CommenSection = ({title}) => {
  return (
   <section className='relative z-10 max-lg:pt-32 pt-10 pb-10 breadCrumb-bg'>
    <div className='absolute content-[""] w-full h-full top-0 left-0 bg-black/60 -z-20'></div>
    <div className="container z-30 py-10">
       <div className="text-center">
        <h3 className='h5 text-white'>{title}</h3>
       </div>
    </div>
   </section>
  )
}

export default CommenSection
