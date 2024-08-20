import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DestroyProduct, ShowProduct } from "../../API/products";
import UpdateProduct from "./updateProduct";
import { MdDelete } from "react-icons/md";
import { FiLoader } from "react-icons/fi";

export default function ProductDetails() {
  const [currentProduct, setCurrentProduct] = useState();
  const [messageDelete, setMessageDelete] = useState(
    "Do you want to delete the product ?"
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8000";


  const fetchShowProduct = async () => {
    try {
      const response = await ShowProduct(id);
      console.log(response);
      setCurrentProduct(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShowProduct();
  }, []);

  // console.log(ShowProduct(id))
  console.log(id);

  const handeDestroyProduct = async () => {
    try {
      const response = await DestroyProduct(id);

      if (!response.ok) {
        console.log(messageDelete);
        setMessageDelete("Something went wrong!");
      }

      console.log(messageDelete);
      setMessageDelete("The product is deleted successfully");

      setTimeout(() => {
        navigate("/dashboard/productsList");
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!currentProduct) {
    return (
      <div className="flex items-center justify-center text-primary h-[80vh] text-2xl -z-10">
        {/* Loading... <FiLoader className="ml-3 stroke-primary text-4xl loader -z-10" /> */}
        <span className="text-primary">No product</span>
      </div>
   
    );
  }

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex justify-center items-center ">
          <img
            className="hover:scale-125 transition-all duration-500"
            src={`${baseUrl}/${currentProduct?.image}`} 
            alt={currentProduct?.name}
          /> || <FiLoader className="ml-3 stroke-primary text-xl loader -z-10" />
        </div>
        <div className="p-4">
          <div>
            <span className="text-gray-400 ">
              Dashboard / {currentProduct?.category.name} /{" "}
              {currentProduct?.name} || <FiLoader className="ml-3 stroke-primary text-xl loader -z-10" />
            </span>
          </div>
          <div className="mt-3">
            <span className="text-4xl font-semibold">
              {currentProduct?.name} || <FiLoader className="ml-3 stroke-primary text-xl loader -z-10" />
            </span>
          </div>
          <div className="mt-6">
            <span className="font-semibold text-xl">
              {currentProduct?.price}{" "}
              <span className="font-light">Dirhams</span>
            </span>
          </div>
          <div className="mt-6 border-b pb-8 ">
            <span className="text-[17px]">{currentProduct?.description} || <FiLoader className="ml-3 stroke-primary text-xl loader -z-10" /> </span>
          </div>
          <div className="mt-3 pb-8 ">
            <span className="font-semibold hover:underline ">
              {" "}
              category : {currentProduct?.category.name}{" "} || <FiLoader className="ml-3 stroke-primary text-xl loader -z-10" />
            </span>
          </div>
          <div className="mt-3 p-4 rounded font-semibold bg-red-200 text-red-700 flex items-center justify-between">
            {messageDelete}
            <span onClick={handeDestroyProduct}>
              <MdDelete className="stroke-red-700 cursor-pointer fill-red-700 text-xl hover:-scale-x-105 transition-all hover:fill-red-500 duration-500" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t-2 w-full grid grid-cols-2  ">
        <div className="font-bold text-xl py-4 border-r border-b">Features</div>
        <div className="py-6 pl-6 tracking-wide border-b">
          {" "}
          {currentProduct?.features}{" "}
        </div>
        <div className="py-6 pr-6 tracking-wide border-b-2 border-r">
          {currentProduct?.category.desc}
        </div>
        <div className="p-4 border-b-2 font-bold text-xl"> category </div>
      </div>

      <div className=" mt-10">
        <UpdateProduct currentProduct={currentProduct} /> 
      </div>
    </div>
  );
}
