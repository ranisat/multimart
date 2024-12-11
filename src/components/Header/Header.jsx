import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import UserIcon from "../../assets/images/userIcon.png";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import {signOut} from 'firebase/auth'
import { auth } from "../../firebase-config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(false)
  // const profileActionRef = useRef(null);

  // const toggleProfileActions = () =>{
  //   profileActionRef.current.classList.toggle(".show_hidden");
  // }
 const navigate = useNavigate()

  const logOut = () =>{
    signOut(auth).then(()=>{
      toast.success('Logged Out')
      navigate('home');
    }).catch(err=>{
      toast.error(err.message)
    })
  }
  const links = [
    {
      id: "1",
      name: "Home",
      links: "Home",
    },
    {
      id: "2",
      name: "Shop",
      links: "shop",
    },
    {
      id: "3",
      name: "Cart",
      links: "cart",
    },
  ];
  return (
    <header className="z-40 pt-2 fixed top-0 left-0 w-full bg-s1 transition-all duration-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            {/* <div><BiMenuAltLeft className='font-medium text-2xl primary'/></div> */}
            <div>
              <NavLink to="home">
                <h2 className="text-p1 title">MegaMart</h2>
              </NavLink>
            </div>
          </div>
          <div className="max-lg:hidden">
            <nav>
              <ul className="flex items-center justify-start gap-8">
                {links.map((item) => (
                  <li
                    key={item.id}
                    className="font-medium px-5 text-[16px] transition-all duration-500 hover:bg-p1 hover:text-white rounded-md  py-1.5"
                  >
                    <NavLink to={item.links}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="w-[350px] max-lg:hidden">
            <form action="" className=" relative">
              <input
                type="text"
                placeholder="Search here..."
                className="focus:outline-none bg-sky-50 border border-p1/30 py-1.5 px-3 w-full rounded-md"
              />
              <span className="absolute top-1.5 right-3">
                <IoIosSearch className="text-p1 text-xl" />
              </span>
            </form>
          </div>
          <div>
            <nav>
              <ul className="flex items-center justify-between max-lg:gap-2 gap-2">
                <li className="font-medium px-2 relative">
                  <NavLink to="/cart">
                    <IoBagHandleOutline className="text-[22px]" />
                  </NavLink>
                  <span className="absolute -top-1 -right-0 text-center rounded-full text-[10px] w-4 h-4 bg-p1 text-white">
                    {totalQuantity}
                  </span>
                </li>
                <li className="font-medium relative px-2">
                  <a href="">
                    <FaRegHeart className="text-[22px]" />
                  </a>
                  <span className="absolute -top-1 -right-0 text-center rounded-full text-[10px] w-4 h-4 bg-p1 text-white">
                    1
                  </span>
                </li>
                <li className="font-medium relative  px-2">
                  <NavLink>
                    <img
                      src={currentUser ? currentUser.photoURL : UserIcon}
                      alt="Img"
                      className="h-8 w-8 object-contain rounded-full"
                     onClick={()=>setProfile(!profile)}
                    />
                  </NavLink>
                  {
                   profile ?   <div
                   className="absolute w-max h-auto bg-s1 top-10 -left-5  px-4 py-2 border border-gray-300 rounded-sm shadow-md shadow-black/30"
                   
                 >
                   <p className="text-[14px] py-1">
                     {currentUser ? (
                       <span onClick={logOut} className="cursor-pointer">Logout</span>
                     ) : (
                       <div className="flex flex-col">
                         <Link to="/signup" className="text-[14px] py-1">
                           Signup
                         </Link>
                         <Link to="/login" className="text-[14px] py-1">
                           Login
                         </Link>
                       </div>
                     )}
                   </p>
                 </div> : ''
                  }
                
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container mx-auto py-1 mt-2">
          <div className="w-full flex items-center justify-between ">
            <div className="max-lg:block hidden w-[10%]">
              <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose className="font-medium text-2xl text-p1 cursor-pointer" />
                ) : (
                  <BiMenuAltLeft className="font-medium text-2xl text-p1 cursor-pointer" />
                )}
              </div>
            </div>
            <div className="max-lg:block hidden w-[90%]">
              <div className="w-[100%] max-lg:w-full">
                <form action="" className=" relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="focus:outline-none bg-sky-100 py-1.5 px-3 w-full rounded-md"
                  />
                  <span className="absolute top-1.5 right-3">
                    <IoIosSearch className="text-p1 text-xl" />
                  </span>
                </form>
              </div>
            </div>
          </div>
          {isOpen ? (
            <div className="absolute w-full h-screen bg-p1/100 left-0 px-10">
              <nav>
                <ul className="">
                  {links.map((item) => (
                    <li
                      key={item.id}
                      className="font-medium px-5 text-[16px] transition-all duration-500 text-white rounded-md  py-4"
                    >
                      <NavLink to={item.links}>{item.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
