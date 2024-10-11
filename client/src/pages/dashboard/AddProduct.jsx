import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants";

const AddProduct = () => {
  const [isAdd, setIsAdd] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const onSubmit = async (values) => {
    const result = fetch(`${BASE_URL}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials:"include",
      body: JSON.stringify(Array(values)),
    })
      .then(() => {
        document.querySelector("form").reset();
        setIsAdd("Your product has been added successfully.");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between p-2 mb-2 items-center ">
          <h2 className="text-xl font-bold ">ADD Products</h2>
        </div>
        <div>
          <p className="p-2 text-center m-auto max-w-[400px] rounded-md text-green-500 ">
            {isAdd}
          </p>
          <form className="mb-0 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errors.alert && (
                <p className="mt-1 mb-2 p-4 text-center bg-red-200 rounded-md text-red-600 text-sm">
                  {errors.alert.message}
                </p>
              )}
              <label
                htmlFor="name"
                className="flex text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  placeholder="Product Name"
                  className="w-full border border-gray-300 px-3 py-2 shadow-sm"
                  {...register("name", {
                    required: "Product Name is required",
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="img"
                className="flex text-sm font-medium text-gray-700"
              >
                URL img
              </label>
              <div className="mt-1">
                <input
                  name="img"
                  type="text"
                  placeholder="Product URL"
                  className="w-full border border-gray-300 px-3 py-2  shadow-sm"
                  {...register("img", { required: "Img link is  required" })}
                />
                {errors.img && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.img.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="flex text-sm font-medium text-gray-700"
              >
                Product price
              </label>
              <div className="mt-1">
                <input
                  name="price"
                  type="number"
                  step={0.1}
                  placeholder="Product Price"
                  className="w-full border border-gray-300 px-3 py-2  shadow-sm"
                  {...register("price", {
                    required: "Product Price is required",
                  })}
                />
                {errors.price && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="flex text-sm font-medium text-gray-700"
              >
                Product Category
              </label>
              <div className="mt-1">
                <input
                  name="category"
                  type="text"
                  placeholder="Product Price"
                  className="w-full border border-gray-300 px-3 py-2  shadow-sm"
                  {...register("category", {
                    required: "Product category is required",
                  })}
                />
                {errors.category && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="disc"
                className="flex text-sm font-medium text-gray-700"
              >
                Product disc
              </label>
              <div className="mt-1">
                <textarea
                  name="disc"
                  placeholder="Product Name"
                  rows={3}
                  className="w-full border border-gray-300 px-3 py-2  shadow-sm"
                  {...register("disc", {
                    required: "Product description is required",
                  })}
                />
                {errors.disc && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.disc.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary"
              >
                {isSubmitting ? (
                  <svg
                    className="m-auto "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                    width={20}
                    height={20}
                  >
                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                  </svg>
                ) : (
                  "ADD PRODUCT"
                )}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
