import { Link } from "react-router-dom";

export default function ProductCart({ products }) {
  const baseUrl = "http://localhost:8000";
  console.log(baseUrl);

  return (
    <div className="lg:py-4 mt-4 grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
      {
        products.map((product) => (
          <Link
            to={`${product.id}`}
            key={product.id}
            className="bg-white lg:shadow-none shadow-xl text-center p-3 hover:scale-105 hover:shadow-2xl transition-all rounded duration-700"
          >
            <div className="h-auto">
              <img
                className="h-full hover:scale-110 transition-all duration-500"
                src={`${baseUrl}/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className=" mt-2 font-light text-sm ">
              {" "}
              {product.category.name}{" "}
            </div>
            <div className=" text-yellow-600 tracking-wide text-xl  mt-1 mb-2">
              {product.name}
            </div>
            <div className="text-gray-400 text-sm ">{product.price} DH</div>
          </Link>
        ))
    }
    </div>
  );
}
