import { Link } from "react-router-dom";
import ProductList from "./ProductList";
export default function NewCollection() {
  const ListProducts = [
    {
      id: 9735,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      name: "Ceramic Oval Bathtub",
      price: "11,200.00",
      category: "Bathroom",
    },
    {
      id: 9947,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-wooden-table-300x300.png",
      name: "Bathroom Wooden Table",
      price: "550.00",
      category: "Bathroom",
    },
    {
      id: 7098,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-300x300.png",
      name: "Green Living Room Sofa",
      price: "1,840.00",
      category: "Living Room",
    },
    {
      id: 1022,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/single-blue-fabric-chair-1-300x300.png",
      name: "Blue Comfy Fabric Chair",
      price: "580.50",
      category: "Bedroom",
    },
  ];

  return (
    <>
      <div className="w-full lg:w-full xl:w-12/12 md:w-12/12 flex flex-wrap justify-between px-8 py-20">
        <div className=" w-full lg:w-6/12 xl:w-6/12 md:w-10/12">
          <img
            className="w-full"
            src="./src/Assets/new-main-collection.jpg"
            alt=""
          />
        </div>

        <div className=" w-full lg:w-6/12 xl:w-6/12 md:w-12/12 flex justify-center items-end mt-8 lg:mt-0 xl:mt-0 ">
          <div className=" w-full lg:w-9/12 xl:w-9/12 md:w-12/12 h-96 ">
            <div className="w-full lg:w-12/12 xl:w-12/12 mt-2 relative">
              <span className="w-3/12 lg:w-3/12 xl:w-3/12 md:w-1/12 bg-secondary h-[.6px] absolute top-3 left-0"></span>
              <span className="w-6/12 absolute top-0 text-secondary left-24 lg:left-32 xl:left-32 font-light">
                NEW COLLECTION
              </span>
            </div>

            <div className="w-12/12 lg:w-10/12 xl:w-10/12 pt-12">
              <h2 className="font-bold text-[2rem] lg-text-[2.6rem] xl:text-[2.6rem] text-black leading-tight">
                A Perfect Set For Your Living Room
              </h2>
            </div>
            <div className="pt-6 leading-loose w-11/12 ">
              <p>
                Massa cras egestas laoreet montes, dapibus eu sit etiam
                curabitur faucibus habitasse lectus vestibulum leo, odio dolor
                quis maecenas faucibus vulputate pharetra nunc sed maecenas diam
                quisque habitasse.
              </p>
            </div>
            <div className="w-full pt-7">
              <button className="bg-primary w-7/12 px-4 py-3 text-semi-black tracking-widest text-[.8rem] font-semibold hover:bg-semi-gray hover:text-white hover:duration-700 hover:translate-y-0.5 ">
                SHOP THIS COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <ProductList list={ListProducts} />
      </div>

      <div className=" w-full h-auto flex flex-wrap justify-between my-24 ">
        <div className="w-full lg:w-3/12 xl:w-3/12 md:w-6/12 h-[82vh] relative">
          <img
            className="w-full h-full object-cover"
            src="./src/Assets/living-room-bg.jpg"
            alt=""
          />
          <div className="flex  w-auto absolute bottom-9 left-7 z-20">
            <h1 className=" font-bold text-[1.6rem] text-white hover:text-secondary duration-500 ">
              <Link to={"rooms"}>Living Room</Link>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#bc9127"
              className="w-6 h-6 mt-3 ml-2 hover:text-yellow-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-45 hover:opacity-60 hover:duration-300"></div>
        </div>

        <div className="w-full lg:w-3/12 xl:w-3/12 md:w-6/12 h-[82vh] relative">
          <img
            className="w-full h-full object-cover"
            src="./src/Assets/bedroom-bg.jpg"
            alt=""
          />
          <div className="flex w-auto absolute bottom-9 left-7 z-20">
            <h1 className=" font-bold text-[1.6rem] text-white hover:text-secondary duration-500 ">
              <Link to={"rooms"}>Bedroom</Link>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#bc9127"
              className="w-6 h-6 mt-3 ml-2 hover:text-yellow-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-45 hover:opacity-60 hover:duration-300"></div>
        </div>

        <div className="w-full lg:w-3/12 xl:w-3/12 md:w-6/12 h-[82vh] relative">
          <img
            className="w-full h-full object-cover"
            src="./src/Assets/kitchen-bg.jpg"
            alt=""
          />
          <div className="flex w-auto absolute bottom-9 left-7 z-20">
            <h1 className=" font-bold text-[1.6rem] text-white hover:text-secondary duration-500 ">
              {" "}
              <Link to={"rooms"}>Kitchen</Link>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#bc9127"
              className="w-6 h-6 mt-3 ml-2 hover:text-yellow-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-45 hover:opacity-60 hover:duration-300"></div>
        </div>
        <div className="w-full lg:w-3/12 xl:w-3/12 md:w-6/12  h-[82vh] relative">
          <img
            className="w-full h-full object-cover"
            src="./src/Assets/bath-room-bg.jpg"
            alt=""
          />
          <div className="flex w-auto absolute bottom-9 left-7 z-20">
            <h1 className=" font-bold text-[1.6rem] text-white hover:text-secondary duration-500 ">
              {" "}
              <Link to={"rooms"}>Bath Room</Link>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#bc9127"
              className="w-6 h-6 mt-3 ml-2 hover:text-yellow-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-45 hover:opacity-60 hover:duration-300"></div>
        </div>
      </div>
    </>
  );
}
