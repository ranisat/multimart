import React from 'react'
import Helment from '../components/Helmet/Helment'
import CommenSection from '../components/Products/CommonSection'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  return (
    <Helment title='checkout'>
      <CommenSection title='Checkout'/>
      <section className='pt-5 pb-5 relative'>
        <div className="container mx-auto">
        <h4 className='font-medium h5 mb-6 text-center'>Billing Information</h4>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
          <div className='p-3 py-0'>
            <form action="" className='p-4 border border-gray-300 rounded-md bg-gray-100'>
               <div className='mb-2'>
                <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Full Name</label>
                <input type="text" placeholder='Enter Your Number' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
               <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Email</label>
                <input type="text" placeholder='Enter your email' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
               <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Phone Number</label>
                <input type="text" placeholder='Phone number' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
               <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Address</label>
                <input type="text" placeholder='Street address' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
               <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>City</label>
                <input type="text" placeholder='city' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
               <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Code</label>
                <input type="text" placeholder='Postal code' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
               <div className='mb-2'>
                <label htmlFor="" className='font-medium text-[14px] inline-block mb-1 text-gray-800'>Country</label>
                <input type="text" placeholder='Country' className='border border-gray-300 w-full rounded-md px-4 py-2 text-sm' />
               </div>
            </form>
          </div>
          <div className="w-full max-lg:w-full">
              <div className="border border-gray-300 rounded-md">
                 <h5 className="border-b bg-gray-200 border-b-gray-300 pb-3 w-full font-bold text-xl px-4 py-2">Total</h5>
                <div className="py-2 px-3 ">
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Total Qty</p>
                   <p> {totalQty} items</p>
                </div>
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Subtotal</p>
                   <p>₹ {totalAmount}</p>
                </div>
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Shipping</p>
                   <p>₹ 0</p>
                </div>
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Free shipping</p>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-b border-t-gray-300 border-b-gray-300 mt-5"> 
                   <p className="font-bold text-[15px]">Total Cost</p>
                   <p className="font-bold text-[15px]">₹ {totalAmount}</p>
                </div>
                <div className="flex items-center justify-between py-2 pt-5 gap-3"> 
                   <button className="main-btn w-full"><Link to="/login">Place an Order</Link></button>
                </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
    </Helment>
  )
}

export default Checkout
