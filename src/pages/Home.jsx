import { useEffect, useState } from "react";
import Helment from "../components/Helmet/Helment";
import Productlist from "../components/Products/Productlist";
import Services from "../services/Services";
import Banner from "./Banner";

import products from "../assets/data/products";
import Counter from "../Counter/Counter";
import Category from "../Category/Category";
import Offer from "../components/Offer/Offer";

const Home = () => {
  const [data, setData] = useState([]);
  const [bestSeller, setBestSeller] = useState([])
  const [mobileProduct, setMobileProduct] = useState([])
  const [popularProduct, setpopularProduct] = useState([])

  useEffect(() => {
    const filterdProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterdBestProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filterdMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterdPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setData(filterdProducts);
    setBestSeller(filterdBestProducts);
    setMobileProduct(filterdMobileProducts);
    setpopularProduct(filterdPopularProducts);
  }, []);
  return (
    <Helment title={"Home"}>
      <Banner />
      {/* <Category/> */}
      <Services />
      <section className="relative pb-5">
        <div className="text-left mb-5 relative  px-10">
          <h2 className="h5 text-title tracking-tight border-b border-b-gray-300 pb-2">Trending Product</h2>
        </div>
        <Productlist data={data} />
      </section>
      
      {/* End Trending Products */}
      <section className="relative pb-10">
        <div className="text-left mb-12 relative px-10">
          <h2 className="h5 text-title tracking-tight border-b border-b-gray-300 pb-2">Best Sales</h2>
        </div>
        <Productlist data={bestSeller} />
      </section>

     {/* End BestSeller Products */}
      <Counter/>
      
       {/* End Trending Products */}
       <section className="relative pt-10 z-10">
        <div className="text-left mb-12 relative px-10">
          <h2 className="h5 text-title tracking-tight border-b border-b-gray-300 pb-2">New Arrivals</h2>
        </div>
        <Productlist data={mobileProduct} />
      </section>
     {/* End BestSeller Products */}

     <Offer/>

      {/* End Trending Products */}
      <section className="relative pt-10 pb-10">
        <div className="text-left mb-12 relative px-10">
          <h2 className="h5 text-title tracking-tight border-b border-b-gray-300 pb-2">Popular Products</h2>
        </div>
        <Productlist data={popularProduct} />
      </section>

    </Helment>
  );
};

export default Home;
