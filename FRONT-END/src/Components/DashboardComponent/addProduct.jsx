import { useEffect, useRef, useState } from "react";
import { TbLayoutGridAdd } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { GetCategorie, PostCategorie } from "../../API/categories";
import { SETCATEGORIES } from "../../REDUX/ProductReducer/ActionPr";
import { PostProducts } from "../../API/products";
import { MdDone } from "react-icons/md";


export default function AddProduct() {
  const [ErrorCateg, setErrorCateg] = useState(false);
  const [ErrorName, setErrorName] = useState(false);
  const [ErrorPrice, setErrorPrice] = useState(false);
  const [ErrorImage, setErrorImage] = useState(false);
  const [ErrorDesc, setErrorDesc] = useState(false);
  const [ErrorFeature, setErrorFeature] = useState(false);
  const [ErrorCategory, setErrorCategory] = useState(false);

  const [isProductSent ,setIsProductSent] = useState(false)
  const [isCategorySent ,setIsCategorySent] = useState(false)

  const newCategorie = useRef();
  const description = useRef();
  const name = useRef();
  const image = useRef();
  const price = useRef();
  const desc = useRef();
  const features = useRef();
  const category_id = useRef();

  const dispatch = useDispatch();
  const categories = useSelector((store) => store.products.categories);
  console.log("categories", categories);

  const fetchCategories = async () => {
    try {
      const categories = await GetCategorie();
      dispatch(SETCATEGORIES(categories));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const HandleAddCategorie = async (e) => {
    e.preventDefault();
    const valueName = newCategorie.current.value;
    const valueDesc = description.current.value;
    if (!valueName || !valueDesc) {
      setErrorCateg(true);
    } else {
      try {
        await PostCategorie(valueName, valueDesc);
        setIsCategorySent(true);
        newCategorie.current.value = "";
        description.current.value = "";
        setErrorCateg(false);
        fetchCategories();
      } catch (error) {
        console.error("Error posting category:", error);
      }
    }
  };

  
  const handleAddProduct = async (e) => {
    e.preventDefault();
  
    const data = {
      nameV: name.current.value.trim(),
      imageV: image.current.value.trim(),
      priceV: price.current.value,
      descV: desc.current.value.trim(),
      featuresV: features.current.value.trim(),
      category_idV: category_id.current.value,
    };
  
    let isValid = true;
  
    if (!data.nameV) {
      setErrorName(true);
      isValid = false;
    } else {
      setErrorName(false);
    }
  
    if (!data.imageV) {
      setErrorImage(true);
      isValid = false;
    } else {
      setErrorImage(false);
    }
  
    if (!data.priceV || isNaN(data.priceV)) {
      setErrorPrice(true);
      isValid = false;
    } else {
      setErrorPrice(false);
    }
  
    if (!data.descV) {
      setErrorDesc(true);
      isValid = false;
    } else {
      setErrorDesc(false);
    }
  
    if (!data.featuresV) {
      setErrorFeature(true);
      isValid = false;
    } else {
      setErrorFeature(false);
    }
  
    if (!data.category_idV) {
      setErrorCategory(true);
      isValid = false;
    } else {
      setErrorCategory(false);
    }
  
    if (isValid) {
      try {
        await PostProducts(
          data.nameV,
          data.imageV,
          data.priceV,
          data.descV,
          data.featuresV,
          data.category_idV
        );

        setIsProductSent(true);

        name.current.value = "";
        image.current.value = "";
        price.current.value = "";
        desc.current.value = "";
        features.current.value = "";
        category_id.current.value = "";
  
      } catch (error) {
        console.error("Error posting product:", error);
      }
    }
  };
  

  // GetProducts()

  return (
    <>
      <div className="  container ">
        <div className="pt-10 pb-6">
          <h1 className=" flex items-center text-2xl font-semibold">
            Ajouter des produits{" "}
            <span>
              <TbLayoutGridAdd className="ml-3" />{" "}
            </span>
          </h1>
        </div>
          {isProductSent ? <div className="bg-green-100 px-6 py-4 w-full mb-6 rounded flex items-center border border-green-200"> <span className="text-green-600 tracking-wide mr-2">Product is added succesfully</span>  <span ><MdDone className="fill-green-600 stroke-green-600 text-2xl"/>  </span>   </div> : ''}

        <div className="bg-gray-100 rounded-[10px] xl:px-14 px-5 py-10 shadow">
          <form action="" className=" space-y-4 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div>
                <label className="" htmlFor="name">
                  product name
                </label>
                {ErrorName ? <span className="text-red-400 ml-2">*</span> : ""}

                <input
                  className={
                    ErrorName
                      ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                      : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                  }
                  placeholder="name"
                  type="text"
                  ref={name}
                />
              </div>
              <div>
                <label htmlFor="image">image</label>
                {ErrorImage ? <span className="text-red-400 ml-2">*</span> : ""}

                <input
                  className={
                    ErrorImage
                      ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                      : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                  }
                  placeholder="image"
                  type="file"
                  ref={image}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
              <div>
                <label htmlFor="price">price</label>
                {ErrorPrice ? <span className="text-red-400 ml-2">*</span> : ""}

                <input
                  className={
                    ErrorPrice
                      ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                      : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                  }
                  placeholder="price (DH)"
                  type="number"
                  ref={price}
                />
              </div>
              <div className="flex flex-col">
                <div>
                <label htmlFor="categorie">categorie</label>
                {ErrorCategory ? <span className="text-red-400 ml-2">*</span> : ""}

                </div>
                <select
                  className= {ErrorCategory ? "p-3 outline-yellow-300 mt-2 border border-red-200 rounded" : "p-3 border border-gray-200 outline-yellow-300 mt-2 rounded"}
                  name="categorie"
                  id="categorie"
                  ref={category_id}
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
                  className= {ErrorDesc? "p-3 outline-yellow-300 mt-2 border border-red-200 rounded" : "p-3 border border-gray-200 outline-yellow-300 mt-2 rounded"}
                  placeholder="description"
                  name="description"
                  id="description"
                  ref={desc}
                ></textarea>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="features">features</label>
                {ErrorFeature ? <span className="text-red-400 ml-2">*</span> : ""}

                <input
                  className={ErrorFeature ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm" : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"}
                  placeholder="features"
                  type="text"
                  ref={features}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                onClick={handleAddProduct}
                className="inline-block rounded-lg bg-primary px-5 py-3 font-medium text-white tracking-wider w-full mt-8 hover:bg-yellow-400 hover:scale-105 transition-all"
              >
                Ajouter le produit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-10 mt-16 border-t-2">
        <h1 className=" flex items-center text-2xl font-semibold">
          Ajouter des categories{" "}
          <span>
            <TbLayoutGridAdd className="ml-3" />{" "}
          </span>
        </h1>
      </div>
      {isCategorySent ? <div className="bg-green-100 px-6 py-4 w-full mb-6 rounded flex items-center border border-green-200"> <span className="text-green-600 tracking-wide mr-2">category is added succesfully</span>  <span ><MdDone className="fill-green-600 stroke-green-600 text-2xl"/>  </span>   </div> : ''}

      <div className="bg-gray-100 rounded-[10px] xl:px-14 px-5 py-10 shadow">
        <form action="" className=" space-y-4 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            <div>
              <label className="" htmlFor="name">
                categorie name
              </label>
              {ErrorCateg ? <span className="text-red-400 ml-2">*</span> : ""}

              <input
                className={
                  ErrorCateg
                    ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="categorie"
                id="newCategorie"
                type="text"
                ref={newCategorie}
              />
            </div>
            <div>
              <label className="" htmlFor="description">
                description
              </label>
              {ErrorCateg ? <span className="text-red-400 ml-2">*</span> : ""}

              <input
                className={
                  ErrorCateg
                    ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="description"
                id="description"
                type="text"
                ref={description}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              onClick={HandleAddCategorie}
              className="inline-block rounded-lg bg-primary px-5 py-3 font-medium text-white tracking-wider w-full mt-8 hover:bg-yellow-400 hover:scale-105 transition-all"
            >
              Ajouter la categorie
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
