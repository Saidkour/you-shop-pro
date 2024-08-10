import { Outlet } from "react-router-dom";
import ProductList from "../Components/ProductList";
import SideProductFilters from "../Components/SideProductFilter";
import { useState } from "react";
// import NewCollection from "../Components/NewCollection";
import { useSelector } from "react-redux";
// import { useFetch } from "../../server/useFetch";

export default function Products() {

  const [showFilters, setShowFilters] = useState(false);
  
  const list = useSelector((store) => store.products.products);
  console.log('from productpage',list.products)
  // useFetch()

  
  function handleToggleFilters() {
    setShowFilters((prev) => !prev);
  }
  return (
    <>
      {showFilters && (
        <SideProductFilters handleToggleFilters={handleToggleFilters} />
      )}
      <div className="bg-semi-white">
        <div className=" container m-auto w-full my-5  px-10 bg-white ">
          <Outlet />
          <div className="w-full flex justify-between py-5 max-sm:flex-col">
            <div className=" flex max-md:flex-col ">
              <button
                onClick={handleToggleFilters}
                className="flex  items-center justify-center gap-2 me-3 bg-primary px-2 py-1"
              >
                <span className="w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
                  </svg>
                </span>
                <span className=" uppercase">Options</span>
              </button>
              <p className=" my-2">Showing 1–12 of 18 results</p>
            </div>
            <div className="">
              <form className="">
                <select className=" border px-2 py-1" defaultValue={""}>
                  <option value="">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </form>
            </div>
          </div>

          <ProductList/>

          <p className="text-center px-3 py-1 w-fit m-auto my-5 border-semi-gray border">
            No more products to show
          </p>
        </div>
      </div>
    </>
  );
};


