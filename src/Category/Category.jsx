import { useState } from "react";
import products from "../assets/data/products";

const Category = () => {
  const [productList, setProductList] = useState(products)

  const FilterByCat = (cat) =>{
    setProductList(products.filter((data) => data.category === cat ))
  }
  return (
    <section className="py-10 relative">
      <div className="container">
        <div className="text-left mb-8 relative px-10">
          <h2 className="h5 text-title tracking-tight border-b border-b-gray-300 pb-2">
            Shop By Categories
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2"></div>
        <div className="flex flex-wrap items-center justify-center gap-2">
         {productList.map((data)=>(
           <div key={data.id}>
           <div className="border rounded-full overflow-hidden p-2 border-gray-200">
             <img
               src={data.imgUrl}
               alt="mobile"
               className="object-contain h-16"
             />
           </div>
           <h5 className="text-sm font-medium text-center mt-2" onClick={()=>FilterByCat(products)}>{data.category}</h5>
         </div>
         ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
