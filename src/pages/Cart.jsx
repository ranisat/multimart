import React from "react";
import Helment from "../components/Helmet/Helment";
import CommenSection from "../components/Products/CommonSection";
import { RiDeleteBin5Line } from "react-icons/ri";
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cartImg from '../assets/images/empty-cart.jpg'

const Cart = () => {
const cartItems = useSelector((state) => state.cart.cartItems) 
const totalAmount = useSelector((state) => state.cart.totalAmount)
  return (
    <Helment title="Cart">
      <CommenSection title="Shopping Cart" />
      <section className="py-10 ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
            <div className="w-full col-span-2 max-lg:w-full">
                {cartItems.length === 0 ? (
                  <div className="flex items-center justify-center">
                    <div>
                    <img src={cartImg} alt="" className="object-contain h-52"/><h5 className="h6">No Product Added..!</h5>
                    </div>
                  </div>
                ) : <div className="relative overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700  bg-gray-200 rounded-md border border-gray-300 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-[14px]">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3 text-[14px]">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-[14px]">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-[14px]">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-[14px]">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {cartItems.map((item, index)=>(
                     <Tr item={item} key={index}/>
                   ))}
                  
                  </tbody>
                </table>
              </div>
              }
            </div>
            <div className="w-full max-lg:w-full">
              <div className="border border-gray-300 rounded-md">
                 <h5 className="border-b bg-gray-200 border-b-gray-300 pb-3 w-full font-bold text-xl px-4 py-2">Total</h5>
                <div className="py-2 px-3">
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Total</p>
                   <p>₹ {totalAmount}</p>
                </div>
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Delivery</p>
                   <p>₹ 0</p>
                </div>
                <div className="flex items-center justify-between my-3"> 
                   <p className="font-medium text-sm">Discount</p>
                   <p>₹ 0</p>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-b border-t-gray-300 border-b-gray-300 mt-5"> 
                   <p className="font-bold text-[15px]">Subtotal</p>
                   <p className="font-bold text-[15px]">₹ {totalAmount}</p>
                </div>
                  <div className="mt-3">
                    <p className="italic font-medium text-sm">taxes and shipping will calculate in checkout </p>
                  </div>
                <div className="flex items-center justify-between py-2 pt-5 gap-3"> 
                   <button className="main-btn w-full"><Link to="/checkout">Checkout</Link></button>
                   <button className="main-btn w-full"><Link to="/shop">Continue</Link></button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helment>
  );
};

const Tr = ({item}) =>{
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return  <tr className="bg-white border border-gray-300">
  <th
    scope="row"
    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
  >
   <div className="overflow-hidden text-center">
   <img src={item.imgUrl} alt="cartImg" className="object-cover h-14 w-18"/>
   </div>
  </th>
  <th
    scope="row"
    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
   <p> {item.productName}</p>
  </th>
  <td className="px-6 py-2 font-medium text-gray-900">₹ {item.price}</td>
  <td className="px-6 py-2 font-medium text-gray-900 text-center">{item.quantity}</td>
  <td className="px-6 py-2"><RiDeleteBin5Line className="text-[18px] text-red-600 cursor-pointer" onClick={deleteProduct}/></td>
</tr>
}

export default Cart;
