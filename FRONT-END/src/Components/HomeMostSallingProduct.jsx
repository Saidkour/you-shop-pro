import { Link } from "react-router-dom";
import ProductList from "./ProductList";
const HomeMostSallingProduct = () => {
  const list = [
    {
      id: 1928,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-island-set-300x300.png",
      name: "White Kitchen Island",
      price: "5,350.75",
      category: "Kitchen",
    },
    {
      id: 2002,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-300x300.png",
      name: "Beige Working Chair With Armrest",
      price: "784.00",
      category: "Home Office",
    },
    {
      id: 3229,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-300x300.png",
      name: "King Size Master Bedroom",
      price: "14,500.50",
      category: "Bedroom",
    },
    {
      id: 9735,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      name: "Ceramic Oval Bathtub",
      price: "11,200.00",
      category: "Bathroom",
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
      </div>
    </div>
  );
};

export default HomeMostSallingProduct;
