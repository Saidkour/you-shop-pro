import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import useFetch from "../hocks/useFetch";

const HomeMostSallingProduct = () => {
  const {
    data: data2,
    loading: loading2,
    error: err2,
  } = useFetch(`/products?fields=category,name,price,img&limit=4&sort=random`);

  const list = data2?.products;
  return (
    <div className="">
      <div className="container px-10 flex flex-col">
        <div className="py-[24px] flex text-xl mb-5">
          <span className="relative text-xs uppercase tracking-wider  opacity-1 pl-[50px] text-secondary">
            <span className=" uppercase absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-secondary"></span>
            best seller
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="self-start text-xl font-semibold md:text-2xl lg:text-4xl">
            Discover Our Most Selling Products
          </h3>
          <Link className="bg-primary self-end px-4 py-2  uppercase text-semi-black text-sm font-semibold">
            view all best sellers
          </Link>
        </div>
        <div className="my-10">
          <ProductList list={list} />
        </div>
      </div>
    </div>
  );
};

export default HomeMostSallingProduct;
