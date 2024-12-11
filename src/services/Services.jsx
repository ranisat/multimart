import React from 'react'
import { BsTruck } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiArrowGoBackLine } from "react-icons/ri";

const Services = () => {
  const service = [
    {
      id:'1',
      name:'Free Shipping',
      icon:<BsTruck className='text-black h6'/>,
      desc:"Whether you’re shopping for yourself or someone special, your order will be delivered straight to your door, free of charge. "
    },
    {
      id:'2',
      name:'Easy Return',
      icon:<IoMdRefresh className='text-black h6'/>,
      desc:"We believe in making your shopping experience effortless, and that includes returns!"
    },
    {
      id:'3',
      name:'Secure Payment',
      icon:<RiSecurePaymentFill className='text-black h6'/>,
      desc:"The latest encryption technology to ensure all transactions are safe and secure. "
    },
    {
      id:'4',
      name:'Back Guarantee',
      icon:<RiArrowGoBackLine className='text-black h6'/>,
      desc:"If for any reason you’re not completely happy with your order, simply return it within 30 days for a full refund – no questions asked."
    }
  ]
  return (
    <section className='relative py-10'>
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
         {service.map((data)=>(
           <div key={data.id} className='p-4 rounded-xl bg-green-100 last-of-type:bg-blue-100 first-of-type:bg-red-100 odd:bg-orange-100 hover:shadow-2xl duration-500 transition-all'>
           <div className="flex items-center gap-3 mb-2">
           <div className='font-medium  w-10 h-10 text-center flex items-center justify-center rounded-full bg-white border border-gray-300'>{data.icon}</div>
           <h6 className='h6 leading-5 tracking-tight'>{data.name}</h6>
           </div>
            <div>
            <p className='text-[12px]'>{data.desc}</p>
            </div>
          </div>
         ))}
        </div>
      </div>
    </section>
  )
}

export default Services
