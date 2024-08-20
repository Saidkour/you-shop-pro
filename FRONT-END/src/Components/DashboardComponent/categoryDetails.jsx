import React, { useEffect, useState } from "react";
import UpdateCategory from "./updateCategory";
import { DestroyCategory, ShowCategory } from "../../API/categories";
import { useNavigate, useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function CategoryDetails() {
  const [categorie, setCategorie] = useState([]);
  const [messageDelete, setMessageDelete] = useState(
    "Do you want to delete this category ?"
  );
  const { id } = useParams();
  const baseUrl = "http://localhost:8000";
  const navigate = useNavigate();

  const fetchShowCategory = async () => {
    try {
      const response = await ShowCategory(id);
      setCategorie(response);
      console.log(categorie);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchShowCategory();
  }, []);

  console.log(categorie);

  const handleDestroyCategory = async () => {
    try {
      const response = await DestroyCategory(id);
      if (!response.ok) {
        setMessageDelete("something went wrong !");
        console.log("something went wrong !");
      }
      setMessageDelete("The category is deleted successfully");
      setTimeout(() => {
        navigate('/dashboard/categories')
      },3000)

    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="mb-4 text-xl border-l-2 border-primary text-primary bg-yellow-100 p-2 lg:mt-0 my-10">
        Category Information
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-3">
          <span className=""> category's name :</span>{" "}
          <span className="font-light ">
            {" "}
            {categorie.name || "loading..."}{" "}
          </span>
        </div>
        <div className="font-semibold ">
          <span className="">category's description :</span>{" "}
          <span className="font-light"> {categorie.desc || "loading..."} </span>
        </div>
      </div>
      <div className=" text-xl border-l-2 p-2 lg:mt-0 mb-4 border-primary bg-yellow-100 flex justify-between items-center">
        <span className=" text-primary">the related products</span>
        <span className=" text-primary font-bold ">
          {categorie.product?.length}{" "}
          <span className=" text-primary font-light">products</span>
        </span>
      </div>
      <div className=" lg:p-4  mb-4 grid lg:grid-cols-5 grid-cols-2 gap-4 ">
        {categorie.product ? (
          categorie.product.map((item, key) => {
            return (
              <>
                <div
                  onClick={() => navigate(`/dashboard/productsList/${item.id}`)}
                  className="bg-gray-50 p-2 rounded hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-700"
                  key={key}
                >
                  <div className="border-b-2 mb-3 flex justify-center items-center">
                    <img
                      className=" h-36 hover:scale-105 transition-all duration-700"
                      src={`${baseUrl}/${item.image}`}
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-light"> {item.name}</span>
                    <span className="text-sm "> {item.price} Dh</span>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="flex items-center justify-center text-primary text-xl -z-10">
            No products{" "}
            <FiLoader className="ml-3 stroke-primary text-2xl loader -z-10" />
          </div>
        )}
      </div>

      <div>
        <div className="mb-4 text-xl border-l-2 border-primary text-primary bg-yellow-100 p-2 lg:mt-0 my-10">
          Modifier des Informations
        </div>
        <div className="my-6">
          <UpdateCategory />
        </div>
      </div>
      <div className=" border-l-2 border-red-700 bg-red-100 p-4 lg:mt-0 flex justify-between items-center">
        <span className="text-red-700 font-semibold lg:text-xl text-sm ">
          {" "}
          <span className="font-light text-red-700 ">  {categorie.name} | </span>   {messageDelete} 
        </span>
        <span onClick={handleDestroyCategory}>
          <MdDelete className="stroke-red-700 cursor-pointer fill-red-700 text-2xl hover:-scale-x-105 transition-all hover:fill-red-500 duration-500" />
        </span>
      </div>
    </>
  );
}
