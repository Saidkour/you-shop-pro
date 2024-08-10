import WhiteLogo from "../Assets/kayuu-logo-white.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-semi-black w-full py-4 flex-col justify-center items-center ">
        <div className="w-full container px-8 flex flex-wrap justify-between py-8">
          <div className=" w-full md:w-1/3 lg:w-4/12 xl:w-4/12  ">
            <ul className="py-4 text-semi-white font-normal ">
              <li className="mb-10">
                <Link to={"/"}>
                  <img className="w-48" src={WhiteLogo} alt="" />
                </Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link>3538 Torrance Blvd, Torrance, CA 90503, USA</Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link>+1 123 456 7890</Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/"}>info@example.com</Link>
              </li>
              <li className="hover:text-primary ">
                <Link to={"/products"}>Visit Our Store</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 lg:w-2/12 xl:w-2/12">
            <ul className="py-3 text-semi-white font-normal ">
              <li className="mb-8 font-bold text-2xl">Useful Links</li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to={"/products"}>Products</Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/rooms"}>Rooms</Link>
              </li>
              <li className="mb-2  hover:text-primary ">
                <Link to={"/about"}>About Us</Link>{" "}
              </li>
              <li className="hover:text-primary ">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-2/12 xl:w-2/12">
            <ul className="py-3 text-semi-white font-normal ">
              <li className="mb-8 font-bold text-2xl">Rooms</li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/rooms"}>Living Room</Link>{" "}
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/rooms"}>Bedroom</Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/rooms"}>Kitchen</Link>
              </li>
              <li className="mb-2 hover:text-primary ">
                <Link to={"/rooms"}>Bath Room</Link>{" "}
              </li>
              <li className="hover:text-primary ">
                <Link to={"/"}>Home Office</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-2/12 xl:w-2/12 py-4">
            <h2 className="mb-8 font-bold text-2xl text-semi-white">
              Stay In Touch
            </h2>
            <div>
              <p className="text-base text-semi-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className=" w-10/12 lg:w-full xl:w-full md:w-full flex justify-between mt-6 ">
                <div className="bg-semi-gray w-10 h-10 flex justify-center items-center rounded hover:bg-gray-600 ">
                  <Link>
                    <svg
                      className=" w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="white"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                    </svg>
                  </Link>
                </div>
                <div className="bg-semi-gray w-10 h-10 flex justify-center items-center rounded hover:bg-gray-600">
                  <Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                      fill="white"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </Link>
                </div>
                <div className="bg-semi-gray w-10 h-10 flex justify-center items-center rounded hover:bg-gray-600">
                  <Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-8 h-5"
                      fill="white"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </Link>
                </div>
                <div className="bg-semi-gray w-10 h-10 flex justify-center items-center rounded hover:bg-gray-600">
                  <Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-8 h-5"
                      fill="white"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-white px-6 py-10 font-normal border-t flex flex-wrap  justify-between items-center">
            <div className="w-full text-center mb-4 lg:w-3/12 xl:2/12  ">
              Copyright © 2024 Online Furniture Store
            </div>
            <div className="w-full text-center lg:w-3/12 xl:2/12 mb-12">
              Developped by Online <span className="cursor-pointer hover:text-white underline ">Abde29_ouaaddi</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
