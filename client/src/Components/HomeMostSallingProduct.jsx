import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import useFetch from "../hocks/useFetch";

const HomeMostSallingProduct = () => {
  const {
    data: data2,
    loading: loading2,
    error: err2,
  } = useFetch(`/products?fields=category,name,price,img&limit=4&sort=random`);

  const list = data2?.products;
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
  ];
  return (
    <div className="">
      <div className="container px-10 flex flex-col">
        <div className="py-[24px] flex text-xl mb-5">
          <span className="relative text-xs uppercase tracking-wider  opacity-1 pl-[50px] text-secondary">
            <span className=" uppercase absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-secondary"></span>
            best seller
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="self-start text-xl font-semibold md:text-2xl lg:text-4xl">
            Discover Our Most Selling Products
          </h3>
          <Link className="bg-primary self-end px-4 py-2  uppercase text-semi-black text-sm font-semibold">
            view all best sellers
          </Link>
        </div>
        <div className="my-10">
          <ProductList list={list} />
        </div>
        <div className="py-5 mb-2">
          <h2 className="text-center  p-2 text-2xl font-semibold my-5">
            Demo Products
          </h2>
          <ProductList list={listDemo} />
        </div>
      </div>
    </div>
  );
};

export default HomeMostSallingProduct;
