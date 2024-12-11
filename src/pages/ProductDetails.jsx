import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helment from "../components/Helmet/Helment";
import CommenSection from "../components/Products/CommonSection";
import { IoIosStar } from "react-icons/io";
import Productlist from "../components/Products/Productlist"
import { RiStarHalfSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("")
  const reviewMsg = useRef("")

  const dispatch = useDispatch()
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    shortDesc,
    reviews,
    description,
    category
  } = product;

  const relatedProducts = products.filter(item => item.category === category) 
  const SubmitHandler = (e) =>{
    e.preventDefault();
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj ={
      userName:reviewUserName,
      text:reviewUserMsg,
      rating,
    }
    toast.success('Review Submitted')
  }

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    }))

    toast.success('Product added successfully!')
  }

  return (
    <Helment title={productName}>
      <CommenSection title={productName} />
      <section className="relative py-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div className="">
              <img src={imgUrl} alt="productImg" className="object-contain" />
            </div>
            <div className="p-3">
              <h2 className="h4 mb-3">{productName}</h2>
              <div className="flex items-center">
                <div className="mb-3">
                  <ul className="flex items-center gap-1 text-orange-500">
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <RiStarHalfSLine />
                    </li>
                  </ul>
                </div>
                <div className="ml-5">
                  <span className="text-sm font-medium">
                    ({avgRating} ratings)
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="h4 text-p1">₹ {price}</h3>
                <p>Category : {category}</p>
              </div>
              <p className="text-sm text-black leading-5">{shortDesc}</p>
              <div className="my-6">
                <button className="main-btn" onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10">
        <div className="container ">
          <div className="flex items-center border border-gray-400 gap-8">
            <div>
              <h2
                className={`${
                  tab === "desc" ? "activeTab" : ""
                } text-sm font-medium cursor-pointer px-2`}
                onClick={() => setTab("desc")}
              >
                Description
              </h2>
            </div>
            <div>
              <h2
                className={`${
                  tab === "rev" ? "activeTab" : ""
                } text-sm font-medium cursor-pointer px-2`}
                onClick={() => setTab("rev")}
              >
                {" "}
                Reviews ({reviews.length})
              </h2>
            </div>
          </div>
          {tab === "desc" ? (
            <div className="py-5">
              <p className="text-sm leading-5 text-justify">{description}</p>
            </div>
          ) : (
            <div className="py-5">
              <ul>
                {reviews?.map((item, index) => (
                  <li key={index}>
                    <p className="font-medium text-xl tracking-tight">John Doe</p>
                    <span className="mb-2 text-sm leading-5 text-orange-400">{item.rating} (rating)</span>
                    <p className="text-sm leading-5 text-justify italic">{item.text}</p>
                  </li>
                ))}
              </ul>
               <div className="p-3 my-5">
               <form action="" onSubmit={SubmitHandler}
               className="border border-gray-300 rounded-md w-3/4 p-5">
                <div className="mb-3">
                <label htmlFor="" className="font-medium text-[16px]">Leave Your Experience</label>
                </div>
               <div className="my-4">
               <input 
                    type="text" 
                    ref={reviewUser}
                    placeholder="Enter name"
                    className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-p1"
                  />
               </div>
                 
                  <div className="py-3">
                    <ul className="flex items-center gap-1 text-orange-400">
                      <li onClick={()=>setRating(1)} className="cursor-pointer"><IoIosStar/></li>
                      <li onClick={()=>setRating(2)} className="cursor-pointer"><IoIosStar/></li>
                      <li onClick={()=>setRating(3)} className="cursor-pointer"><IoIosStar/></li>
                      <li onClick={()=>setRating(4)} className="cursor-pointer"><IoIosStar/></li>
                      <li onClick={()=>setRating(5)} className="cursor-pointer"><IoIosStar/></li>
                    </ul>
                  </div>
                  <div>
                  <textarea rows={4} ref={reviewMsg} required
                    placeholder="Enter your message"
                    className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-p1"
                  />
                  </div>
                  <div>
                    <button type="submit" className="main-btn">Submit</button>
                  </div>
              </form>
               </div>
            </div>
          )}
        </div>
      </section>
      <section className="pb-10">
          <div className="container">
             <h2 className="font-medium text-xl">You might also like</h2>
             <Productlist data={relatedProducts}/>
          </div>
      </section>
    </Helment>
  );
};

export default ProductDetails;
