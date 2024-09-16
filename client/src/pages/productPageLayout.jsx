import { Outlet, useLocation } from "react-router-dom";
import ProductList from "../Components/ProductList";
import SideProductFilters from "../Components/SideProductFilter";
import { useEffect, useRef, useState } from "react";
import useFetch from "../hocks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import {
  setLength,
  setLoading,
  setCategorys,
  setProducts,
} from "../redux/reducers/productReducer";
import {
  allProducts,
  lengthProducts,
  loadingProducts,
} from "../redux/selectors";

export default function Products() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [showFilters, setShowFilters] = useState(false);
  const productss = useSelector(allProducts);
  const loading = useSelector(loadingProducts);
  const length = useSelector(lengthProducts);

  const isCategoryPage = location.pathname.includes("/category/");

  const {
    data,
    loading: isLoading,
    error,
  } = useFetch("/products?fields=category,name,price,img");

  const categorys = data?.products.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 1;
    } else {
      acc[curr.category]++;
    }
    return acc;
  }, {});

  useEffect(() => {
    dispatch(setCategorys(categorys));
  }, [dispatch, categorys]);

  useEffect(() => {
    if (isCategoryPage) return;

    dispatch(setLoading(isLoading));

    if (data) {
      dispatch(setProducts(data.products));
      dispatch(setLength(data.length));
    }
  }, [data, dispatch, isCategoryPage, isLoading, error]);

  function handleToggleFilters() {
    setShowFilters((prev) => !prev);
  }

  const [filter, setFilter] = useState("");
  const [filterdProducts, setFilterdProducts] = useState(productss);

  useEffect(() => {
    setFilterdProducts((prev) => {
      if (filter === "low_to_high") {
        return [...productss].sort((a, b) => a.price - b.price);
      } else if (filter === "high_to_low") {
        return [...productss].sort((a, b) => b.price - a.price);
      } else {
        return productss;
      }
    });
  }, [filter, productss]);
  const listDemo = [
    {
      id: 1928,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-island-set-300x300.png",
      name: "White Kitchen Island",
      price: "5350.75",
      category: "Kitchen",
      disc: "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda.",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 2002,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-300x300.png",
      name: "Beige Working Chair With Armrest",
      price: "784.00",
      category: "Home Office",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 3229,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-300x300.png",
      name: "King Size Master Bedroom",
      price: "14500.50",
      category: "Bedroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 9735,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      name: "Ceramic Oval Bathtub",
      price: "11200.00",
      category: "Bathroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 9947,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-wooden-table-300x300.png",
      name: "Bathroom Wooden Table",
      price: "550.00",
      category: "Bathroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 6021,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-stool-300x300.png",
      name: "Wooden Bath Room Stool",
      price: "220.50",
      category: "Bathroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 7098,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-300x300.png",
      name: "Green Living Room Sofa",
      price: "1840.00",
      category: "Living Room",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 8982,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-circle-mirror-300x300.png",
      name: "Bathroom Golden Ring Mirror",
      price: "124.25",
      category: "Bathroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 9927,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bedroom-single-chair-300x300.png",
      name: "Bedroom Single Chair",
      price: "504.00",
      category: "Bedroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 1038,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-furniture-cabinet-300x300.png",
      name: "Kitchen Cabinet",
      price: "1150.25",
      category: "Cabinet",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 1101,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/brown-wooden-stool-300x300.png",
      name: "Brown Circle Stool",
      price: "224.00",
      category: "Kitchen",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
    {
      id: 1022,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/single-blue-fabric-chair-1-300x300.png",
      name: "Blue Comfy Fabric Chair",
      price: "580.50",
      category: "Bedroom",
      features: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          " Nunc vitae erat sit amet neque varius consequat",
          "Lorem ipsum dolor sit amet",
        ],
      },
      care_instruction: {
        text: "Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.",
        items: [
          "Etiam eu tortor tempor, malesuada",
          "Nunc vitae erat sit amet neque varius consequat",
          "Vivamus lobortis posuere ante",
          "Morbi nisi diam, cursus non ultricies",
          "Lorem ipsum dolor sit amet",
        ],
      },
    },
  ];
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
              {length ? (
                <p className=" my-2">
                  Showing 1–{length} of {length} results
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="">
              <form className="">
                <select
                  className=" border px-2 py-1"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="">Default sorting</option>

                  <option value="low_to_high">
                    Sort by price: low to high
                  </option>
                  <option value="high_to_low">
                    Sort by price: high to low
                  </option>
                </select>
              </form>
            </div>
          </div>

          {loading ? (
            "loading"
          ) : error ? (
            <p className="m-3 text-red-500">{error}</p>
          ) : (
            <>
              <ProductList list={filterdProducts} />
              <p className="text-center px-3 py-1 w-fit m-auto my-5 border-semi-gray border">
                No more products to show
              </p>
            </>
          )}
          <div className="py-5 mb-2">
            <h2 className="text-center  p-2 text-2xl font-semibold my-5">
              Demo Products
            </h2>
          <ProductList list={listDemo} />
          </div>
        </div>
      </div>
    </>
  );
}
