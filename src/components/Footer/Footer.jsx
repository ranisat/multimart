import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import {Link} from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="relative pt-10 pb-5 z-10 bg-p1 footerBg overflow-hidden">
      <div className="absolute max-lg:top-0 -bottom-14 left-0 right-2 -z-10">
        <h2 className="brandTitle text-[10rem] text-left max-lg:text-[6rem] font-extrabold stroke-cyan-500 opacity-30">
          Footer
        </h2>
      </div>
      <div className="container pb-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div>
            {/* <h2 className="text-s1 title">MegaMart</h2> */}
            <div className="mb-4">
              <h4 className="text-xl font-medium my-3 text-s1 footerTitle relative mb-7">
                Contact Us
              </h4>
              <p className="flex items-center gap-2 mb-1 text-s1/80">
                <FaWhatsapp className="text-xl" />{" "}
                <a href="" className="text-s1/80">
                  +91 1234567890
                </a>
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center gap-2 mb-1 text-s1/80">
                <IoCallOutline className="text-xl" />{" "}
                <a href="" className="text-s1/80">
                  +91 1234567890
                </a>
              </p>
            </div>
            <div className="">
              <p className="flex items-center gap-2 mb-1 text-s1/80">
                <CiMail className="text-xl" />{" "}
                <a href="" className="text-s1/80">
                  megamart@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <h4 className="text-xl font-medium my-3 text-s1 footerTitle relative mb-7">
                Most Popular Categories
              </h4>
              <ul className="pl-3">
                <li className="mb-4 text-s1/80"><Link to='/shop'>Modern Sofa</Link></li>
                <li className="mb-4 text-s1/80"><Link to='/shop'>Mobile Phones</Link></li>
                <li className="mb-4 text-s1/80"><Link to='/shop'>Arm Chair</Link></li>
                <li className="mb-4 text-s1/80"><Link to='/shop'>Smart Watches</Link></li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <h4 className="text-xl font-medium my-3 text-s1 footerTitle relative mb-7">
              Customer Services
            </h4>
            <ul className="pl-3">
              <li className="mb-4 text-s1/80"><Link to='/shop'>Shop</Link></li>
              <li className="mb-4 text-s1/80"><Link to='/cart'>Cart</Link></li>
              <li className="mb-4 text-s1/80">Terms & Conditions</li>
              <li className="mb-4 text-s1/80">Privacy Policy</li>
            </ul>
          </div>
          <div className="max-lg:order-first">
            <h2 className="text-s1 title mb-4">MegaMart</h2>
            <p className="text-sm text-s1/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              quam.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-2 border-t border-t-gray-400">
        <div className="text-center">
          <p className="text-s1">&copy;{year} All right reserved.</p>
        </div>
      </div>
   
    </section>
  );
};

export default Footer;
