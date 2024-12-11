import React, { useState } from "react";
import CommenSection from "../components/Products/CommonSection";
import Helment from "../components/Helmet/Helment";
import { IoSearchOutline } from "react-icons/io5";
import products from "../assets/data/products";
import Productlist from "../components/Products/Productlist";
import Noproduct from "../assets/images/no-product.png";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helment title="Shop">
      <CommenSection title="Shop" />
      <section className="relative pt-8 pb-3 px-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="w-max">
              <select
                onChange={handleFilter}
                id="countries"
                className="bg-p1 border border-gray-300 text-s1 text-sm focus:outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="">Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
            <div className="w-max">
              <select
                id="countries"
                className="bg-p1 border border-gray-300 text-s1 focus:outline-none text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="sofa">Sort By</option>
                <option value="asending">Ascending </option>
                <option value="desending">Descending</option>
              </select>
            </div>
            </div>
            <div className="max-lg:w-full w-96">
              <form className=" mx-auto">
                <div className="relative">
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Product here..."
                    className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-p1"
                  />
                  <span className="absolute text-xl top-2 right-3">
                    <IoSearchOutline />
                  </span>
                </div>
              </form>
            </div>
          </div>
      </section>
      <section className="relative">
          {productsData.length === 0 ? (
            <img src={Noproduct} alt="" className="h-96 mx-auto" />
          ) : (
            <Productlist data={productsData} />
          )}
      </section>
    </Helment>
  );
};

export default Shop;
