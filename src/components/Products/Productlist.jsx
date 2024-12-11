import Productcard from "./Productcard";
const Products = ({ data }) => {
  return (
    <>
      <div className="container bg-gray-100 py-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2">
          {data ?.map((item, index) => (
            <Productcard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
