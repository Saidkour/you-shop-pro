import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setLength, setProducts } from "../redux/reducers/productReducer";
import { productCategory } from "../redux/selectors";
const SideProductFilters = ({ handleToggleFilters }) => {
  const dispatch = useDispatch();
  const [maxMinPrice, setMaxMinPrice] = useState([20, 37]);
  const [isfilterbyPrice, setIsFilterByPrice] = useState(false);
  function handleFilterByPrice() {
    setIsFilterByPrice(true);
  }
  const categories = useSelector(productCategory);
  useEffect(() => {
    if (!isfilterbyPrice) return;
    fetch(
      `${BASE_URL}/products?price[gte]=${maxMinPrice[0]}&price[lte]=${maxMinPrice[1]}&fields=category,name,price,img`
    )
      .then((res) => res.json())
      .then(
        (data) =>
          dispatch(setProducts(data.products)) &&
          dispatch(setLength(data.length))
      )
      .catch((err) => console.log(err));
    setIsFilterByPrice(false);
  }, [isfilterbyPrice, maxMinPrice, dispatch]);
  ///

  // search product by name
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  function handleSearchByName() {
    setIsSearch(true);
  }
  useEffect(() => {
    if (!isSearch) return;
    if (search === "") return setIsSearch(false);
    fetch(`${BASE_URL}/products?name=${search}&fields=category,name,price,img`)
      .then((res) => res.json())
      .then(
        (data) =>
          dispatch(setProducts(data.products)) &&
          dispatch(setLength(data.length))
      )
      .catch((err) => console.log(err));
    setIsSearch(false);
  }, [isSearch, setIsSearch, dispatch, search]);
  return (
    <>
      <div
        onClick={handleToggleFilters}
        className="fixed top-0 z-[98] opacity-[.5] left-0 w-full h-full bg-semi-gray"
      ></div>
      <div className="fixed bg-white pt-[60px] px-5 top-0 z-[99] left-0 h-full w-[300px]">
        <button
          onClick={handleToggleFilters}
          className="absolute  top-4 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6  "
          >
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        {/* search product */}
        <div className="flex">
          <input
            type="text"
            className=" ps-2 border"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            onClick={handleSearchByName}
            className="uppercase border bg-primary text-sm p-2 text-semi-black tracking-wide font-semibold"
          >
            Search
          </button>
        </div>
        {/* fileter by price */}
        <div className="py-3 text-xl font-semibold ">
          <h4 className="mb-5">Filter by price</h4>
          <RangeSlider
            maxMinPrice={maxMinPrice}
            setMaxMinPrice={setMaxMinPrice}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleFilterByPrice}
            className="uppercase border bg-primary text-semi-black text-sm p-2 tracking-wide font-semibold"
          >
            filter
          </button>
          <p className=" tracking-wider">
            Price:
            <span className="font-bold ">{`$${maxMinPrice[0]} - $${maxMinPrice[1]}`}</span>
          </p>
        </div>

        {/* Product categories */}
        <div className="mt-4  ">
          <h4 className="mb-5 text-xl font-semibold">Product categories</h4>
          <ul className="flex flex-col gap-2 p-2 overflow-y-auto h-[200px] ">
            {categories &&
              Object.entries(categories).map(([category, count]) => {
                const item = { category, count };
                return (
                  <CategoryItem
                    key={category}
                    handleToggleFilters={handleToggleFilters}
                    item={item}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

const CategoryItem = ({ item, handleToggleFilters }) => {
  // console.log(item);
  return (
    <>
      <li className=" flex justify-between ">
        <Link
          to={`category/${item.category}`}
          onClick={handleToggleFilters}
          className=" hover:text-secondary"
        >
          {item.category}{" "}
        </Link>
        <span>({item.count})</span>
      </li>
    </>
  );
};

function RangeSlider({ maxMinPrice, setMaxMinPrice }) {
  const handleChange = (e, newValue) => {
    e.preventDefault();
    setMaxMinPrice(newValue);
  };
  return (
    <Slider
      getAriaLabel={() => "Temperature range"}
      value={maxMinPrice}
      onChange={handleChange}
      valueLabelDisplay="off"
      min={0}
      max={10000}
      disableSwap
    />
  );
}

SideProductFilters.propTypes = {
  handleToggleFilters: PropTypes.func.isRequired,
};

RangeSlider.propTypes = {
  maxMinPrice: PropTypes.array.isRequired,
  setMaxMinPrice: PropTypes.func.isRequired,
};

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleToggleFilters: PropTypes.func.isRequired,
};
export default SideProductFilters;
