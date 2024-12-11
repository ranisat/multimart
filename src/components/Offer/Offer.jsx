import React from 'react'
import smartWatch from '../../assets/images/smartWatch.png'
import apple from '../../assets/images/apple.png'
import iphone from '../../assets/images/phone-03.png'
import wireless from '../../assets/images/wireless-03.png'
const Offer = () => {
  const data = [
    {
      id:'1',
      name:'watch',
      icon:apple,
      offer:'upto 80% off',
      product:smartWatch
    },
    {
      id:'2',
      name:'iphone',
      icon:apple,
      offer:'upto 80% off',
      product:iphone
    },
    {
      id:'3',
      name:'wireless',
      icon:apple,
      offer:'upto 80% off',
      product:wireless
    }
  ]
  return (
    <section className='relative py-10 bg-gray-200'>
       <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2">
              {data.map((item)=>(
                 <div key={item.id} className='rounded-xl border bg-pink-950 h-[240px] first-of-type:bg-cyan-950 last-of-type:bg-blue-950 overflow-hidden  relative offerBg z-10'>
                <div className="flex items-center justify-evenly" >
                 <div className='pl-6' >
                 <p className='bg-gray-300  rounded-md w-max text-black px-2 py-1 uppercase mb-5'>{item.name}</p>
                  <div className="my-5 bg-s1 rounded-md w-max p-1">
                    <img src={item.icon} alt="" className='h-8 object-contain'/>
                  </div>
                 <h5 className='text-[20px] text-s1 font-medium'>{item.offer}</h5>
               </div>
               <div className=''>
               <img src={item.product} alt="" className='object-contain h-56'/>
               </div>
             </div>
          </div>
             ))}
           </div>
        </div>
    </section>
  )
}

export default Offer
