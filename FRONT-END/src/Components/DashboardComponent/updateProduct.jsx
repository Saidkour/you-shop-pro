import React, { useEffect, useRef, useState } from "react";
import { GetCategorie } from "../../API/categories";
import { MdDone } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { EditProduct } from "../../API/products";

export default function UpdateProduct({ currentProduct }) {
  const name = useRef();
  const image = useRef();
  const price = useRef();
  const desc = useRef();
  const features = useRef();
  const category_id = useRef();
  const baseUrl = "http://localhost:8000";


  const [ErrorName, setErrorName] = useState(false);
  const [ErrorPrice, setErrorPrice] = useState(false);
  const [ErrorImage, setErrorImage] = useState(false);
  const [ErrorDesc, setErrorDesc] = useState(false);
  const [ErrorFeature, setErrorFeature] = useState(false);
  const [ErrorCategory, setErrorCategory] = useState(false);

  const [isProductSent, setIsProductSent] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log(currentProduct?.id);

  const GetCategories = async () => {
    try {
      const response = await GetCategorie();
      setCategories(response);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetCategories();
  }, []);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setIsProductSent(false);

    try {
      const formData = new FormData();
      formData.append("name", name.current.value.trim());
      // Check if an image file is selected before appending
      if (image.current.files[0]) {
        formData.append("image", image.current.files[0]);
      }
      formData.append("price", price.current.value.trim());
      formData.append("desc", desc.current.value.trim());
      formData.append("features", features.current.value.trim());
      formData.append("category_id", category_id.current.value.trim());

      console.log("Form Data: ", [...formData.entries()]);

      const response = await EditProduct(formData, currentProduct?.id);
      console.log("Updated response:", response);
      setIsProductSent(true);
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
    }
  };

  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="pt-10 pb-6">
        <h1 className=" flex items-center text-2xl font-semibold">
          update the product info{" "}
          <span>
            <FaEdit className="ml-3" />{" "}
          </span>
        </h1>
      </div>
      {isProductSent ? (
        <div className="bg-green-100 px-6 py-4 w-full mb-6 rounded flex items-center border border-green-200">
          {" "}
          <span className="text-green-600 tracking-wide mr-2">
            Product is updated succesfully
          </span>{" "}
          <span>
            <MdDone className="fill-green-600 stroke-green-600 text-2xl" />{" "}
          </span>{" "}
        </div>
      ) : (
        ""
      )}

      <div className="bg-gray-100 rounded-[10px] xl:px-14 px-5 py-10 shadow">
        <form action="" className=" space-y-4" encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            <div>
              <label className="" htmlFor="name">
                product name
              </label>
              {ErrorName ? <span className="text-red-400 ml-2">*</span> : ""}

              <input
                className={
                  ErrorName
                    ? "w-full outline-green-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-green-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="name"
                type="text"
                ref={name}
                defaultValue={currentProduct?.name}
              />
            </div>
            <div>
              <label htmlFor="image">image</label>
              {ErrorImage ? <span className="text-red-400 ml-2">*</span> : ""}

              <div>
                <input
                  className={
                    ErrorImage
                      ? "w-full outline-green-300 mt-2 bg-white rounded-lg border border-red-200 p-3 text-sm"
                      : "w-full outline-green-300 mt-2 bg-white rounded-lg border border-gray-200 p-3 text-sm"
                  }
                  placeholder="image"
                  type="file"
                  ref={image}
                  //   defaultValue={currentProduct?.image}
                />
                <img
                  className="h-14"
                  src={`${baseUrl}/${currentProduct?.image}`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
            <div>
              <label htmlFor="price">price</label>
              {ErrorPrice ? <span className="text-red-400 ml-2">*</span> : ""}

              <input
                className={
                  ErrorPrice
                    ? "w-full outline-green-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-green-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="price (DH)"
                type="number"
                ref={price}
                // onChange={(e) => setPrice(e.target.value)}
                defaultValue={currentProduct?.price}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="categorie">categorie</label>
                {ErrorCategory ? (
                  <span className="text-red-400 ml-2">*</span>
                ) : (
                  ""
                )}
              </div>
              <select
                className={
                  ErrorCategory
                    ? "p-3 outline-green-300 mt-2 border border-red-200 rounded"
                    : "p-3 border border-gray-200 outline-green-300 mt-2 rounded"
                }
                name="categorie"
                id="categorie"
                ref={category_id}
                // onChange={(e) => setCategoryId(e.target.value)}
                defaultValue={currentProduct?.category_id}
              >
                <option value="">choose...</option>
                {categories &&
                  categories.map((item, key) => {
                    return (
                      <>
                        {" "}
                        <option key={key} value={item.id}>
                          {item.name}
                        </option>{" "}
                      </>
                    );
                  })}
              </select>
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="description">description</label>
                {ErrorDesc ? <span className="text-red-400 ml-2">*</span> : ""}
              </div>

              <textarea
                className={
                  ErrorDesc
                    ? "p-3 outline-green-300 mt-2 border border-red-200 rounded"
                    : "p-3 border border-gray-200 outline-green-300 mt-2 rounded"
                }
                placeholder="description"
                name="description"
                id="description"
                ref={desc}
                // onChange={(e) => setDesc(e.target.value)}
                defaultValue={currentProduct?.description}
              ></textarea>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="features">features</label>
              {ErrorFeature ? <span className="text-red-400 ml-2">*</span> : ""}

              <textarea
                className={
                  ErrorFeature
                    ? "w-full outline-green-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-green-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="features"
                type="text"
                ref={features}
                // onChange={(e) => setFeatures(e.target.value)}
                defaultValue={currentProduct?.features}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              onClick={handleUpdateProduct}
              className="inline-block rounded-lg bg-green-600 px-5 py-3 font-medium text-white tracking-wider w-full mt-8 hover:bg-green-700 hover:scale-105 transition-all duration-700"
            >
              Modifier le produit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
