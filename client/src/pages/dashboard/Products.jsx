import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/selectors";
import ProductsList from "./ProductsList";
import { Link } from "react-router-dom";
import useFetch from "../../hocks/useFetch";
import { setProducts } from "../../redux/reducers/productReducer";

const Products = () => {
  const Products = useSelector(allProducts);
  const dispatch = useDispatch();
  const { data: data, loading: loading, error: err } = useFetch(`/products`);
  useEffect(() => {
    if (data && !loading) {
      dispatch(setProducts(data?.products));
    }
  }, [ data, loading, dispatch]);

  return (
    <div className="block min-w-full p-5">
      <div className="p-2 min-w-[100%]  bg-white rounded-md">
        <div className="flex justify-between p-2 mb-2 items-center ">
          <h2 className="text-xl font-bold ">All Products</h2>
          <div>
            <Link
              to={"/dashboard/products/add"}
              className="bg-primary p-2 font-medium text-semi-black hover:bg-semi-gray hover:text-white"
            >
              ADD PRODUCT
            </Link>
          </div>
        </div>
        <hr className="my-5 max-w-5xl mx-auto text-primary"/>
        <div className="grid grid-col-4">
          <ProductsList list={Products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
