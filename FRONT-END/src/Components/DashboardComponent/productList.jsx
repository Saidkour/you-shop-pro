import React, { useEffect, useState } from "react";
import { FilterProductsByCategory, GetProducts } from "../../API/products";
import { GetCategorie } from "../../API/categories";
import ProductCart from "./productCart";
import { VscDiffAdded } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

// import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await GetCategorie();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedValue) {
          const filteredProducts = await FilterProductsByCategory(selectedValue);
          setProducts(filteredProducts);
        } else {
          const products = await GetProducts();
          setProducts(products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedValue]);


  return (
    <div className="lg:mt-0 mt-10">
      <div className="bg-primary rounded flex justify-between items-center p-2">
        <div className="font-semibold tracking-wider text-white lg:text-xl">
          Product List
        </div>
        <Link to={"/dashboard/addProducts"}>
          <VscDiffAdded className="stroke-white fill-white text-2xl hover:scale-105 transition-all" />
        </Link>
        <div>
          <select
            onChange={(e) => setSelectedValue(e.target.value)}
            className="lg:py-2 lg:px-5 px-1 py-2 outline-yellow-500 rounded"
            name="products"
            id="products"
          >
            <option value="">Choose category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} || loading...
              </option>
            ))}
          </select>
        </div>
      </div>
      {products.length > 0 ? (
        <ProductCart products={products} />
      ) : (
        <div className="flex items-center justify-center text-primary h-[70vh] text-2xl -z-10">
        {/* Loading...  <FiLoader className="ml-3 stroke-primary text-4xl loader -z-10" /> */}
        No products
        </div>
      )}
    </div>
  );
}
