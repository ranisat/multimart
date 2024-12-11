import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from 'react-toastify';

const Productcard = ({ item }) => {

 const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success('Product added Successfully')
  };

  return (
    <>
      <div className="border bg-s1 border-gray-300 duration-500 w-[95%] mx-auto transition-all hover:border-p1/70  hover:shadow-black/20 rounded-md overflow-hidden mb-2 relative shadow-sm shadow-black/10">
        <div className="absolute z-20 text-s1 rounded-md bg-p1 left-1 top-1 text-[12px] px-1 py-1">
          {item.discount}%off
        </div>
        <div className="h-[200px] w-[80%] overflow-hidden mx-auto p-5 rounded-md">
          <img
            src={item.imgUrl}
            alt="item"
            className="object-contain max-lg:h-48 transition-all duration-500 hover:scale-[1.1]"
          />
        </div>
        <div className="px-4 py-4 bg-gray-100 relative">
          <h3 className="mb-1 text-[18px] tracking-tight font-medium">
            {" "}
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <p className="text-[12px] text-gray-500 uppercase mb-2">
            {item.category}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-black-600 text-xl font-medium">
              ₹ {(item.price - (item.price * item.discount) / 100).toFixed(0)}
            </div>
            <div className="text-red-600 text-[18px] font-medium">
              <span className="line-through">₹ {item.price}</span>
            </div>
            <button
              className="bg-p1 w-10 h-10 flex items-center justify-center rounded-full shadow-md shadow-black/40 cursor-pointer"
              type="button"
              onClick={addToCart}
            >
              <MdAddShoppingCart className="text-center text-2xl text-s1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
