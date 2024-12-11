import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval;

  const countDown = ()=>{
    const destination = new Date('Dec 20, 2024').getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destination - now
      const days = Math.floor(different / (1000 * 60 * 60 * 24))

      const hours = Math.floor(different % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60 ))
      const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60 )) 
      const seconds = Math.floor(different % (1000 * 60) / (1000)) 

      if(destination < 0)clearInterval(interval.current)
        else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    })
  }
  useEffect(()=>{
    countDown();
  },[])
  return (
    <div className='my-6'>
       <div className="flex items-center justify-between max-lg:gap-2 gap-6">
         <div className='text-center py-2 rounded-md bg-s1 px-4'>
           <h6 className='text-p1 h4 mb-1'>{days}</h6>
           <p className='text-p1 text-sm font-medium tracking-tight italic border-t border-t-p1'>Days</p>
         </div>
         <div className='text-white text-2xl'>:</div>
         <div className='text-center py-2 rounded-md bg-s1 px-4'>
           <h6 className='text-p1 h4 mb-1'>{hours}</h6>
           <p className='text-p1 text-sm font-medium tracking-tight italic border-t border-t-p1'>Hours</p>
         </div>
         <div className='text-s1 text-2xl'>:</div>
         <div className='text-center py-2 rounded-md bg-s1 px-4'>
           <h6 className='text-p1 h4 mb-1'>{minutes}</h6>
           <p className='text-p1 text-sm font-medium tracking-tight italic border-t border-t-p1'>Minute</p>
         </div>
         <div className='text-s1 text-2xl'>:</div>
         <div className='text-center py-2 rounded-md bg-s1 px-4'>
           <h6 className='text-p1 h4 mb-1'>{seconds}</h6>
           <p className='text-p1 text-sm font-medium tracking-tight italic border-t border-t-p1'>Second</p>
         </div>
       </div>
    </div>
  )
}

export default Clock
