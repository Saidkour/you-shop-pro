import React, { useEffect, useRef, useState } from "react";
import { EditCategory, ShowCategory } from "../../API/categories";
import { useParams } from "react-router-dom";

export default function UpdateCategory() {
  const [isCategorySent, setIsCategorySent] = useState(false);
  const [ErrorCateg, setErrorCateg] = useState(false);
  const [categorie, setCategorie] = useState([]);

  const newCategorie = useRef();
  const description = useRef();
  const { id } = useParams();
  console.log(categorie.id);

  const fetchShowCategory = async () => {
    try {
      const response = await ShowCategory(id);
      setCategorie(response)
      console.log(categorie)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchShowCategory();
  }, []);

  // const navigate = useNavigate();

  const HandleUpdateCategorie = async (e) => {
    e.preventDefault();
    const valueName = newCategorie.current.value;
    const valueDesc = description.current.value;

    if (!valueName || !valueDesc) {
      setErrorCateg(true);
      setIsCategorySent(false);
    } else {
      try {
        const formData = new FormData();
        formData.append("name", valueName);
        formData.append("desc", valueDesc);
        console.log("Form Data: ", [...formData.entries()]);

        const updatedCategory = await EditCategory(formData, categorie.id);
        setIsCategorySent(true);
        setErrorCateg(false);

        const response = await ShowCategory(id);
        setCategorie(response);

      } catch (error) {
        console.error("Error posting category:", error);
      }
    }
  };

  return (
    <>
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
                id="name"
                type="text"
                ref={newCategorie}
                defaultValue={categorie.name}
              />
            </div>
            <div>
              <label className="" htmlFor="description">
                description
              </label>
              {ErrorCateg ? <span className="text-red-400 ml-2">*</span> : ""}

              <textarea
                className={
                  ErrorCateg
                    ? "w-full outline-yellow-300 mt-2 rounded-lg border border-red-200 p-3 text-sm"
                    : "w-full outline-yellow-300 mt-2 rounded-lg border border-gray-200 p-3 text-sm"
                }
                placeholder="description"
                id="description"
                type="text"
                ref={description}
                defaultValue={categorie.desc}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              onClick={HandleUpdateCategorie}
              className="inline-block rounded-lg bg-green-600 px-5 py-3 font-medium text-white tracking-wider w-full mt-8 hover:bg-green-400 hover:scale-105 transition-all duration-700"
            >
              Modifier la categorie
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
