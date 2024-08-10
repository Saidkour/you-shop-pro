import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import darklogo from "../Assets/kayuu-Logo-dark.svg";
import whitelogo from "../Assets/kayuu-Logo-white.svg";
import PropTypes from "prop-types";
import NavLinkItem from "./navLinkItem";
import { useSelector } from "react-redux";

const NavBar = ({ handleClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  const [isTrensparent, setIsTransparent] = useState(false);
  const orders = useSelector((state) => state.orders.orders)

  useEffect(() => {
    setUrl(location.pathname);
    if (url === "/") {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [location, url]);
  //   console.log(url);
  return (
    <>
      <nav
        className={`py-5 px-10 shadow-lg  ${
          isTrensparent
            ? menuOpen
              ? "bg-semi-black relative  z-[999] top-0 left-0 w-full"
              : "bg-transparent absolute z-[999] top-0 left-0 w-full"
            : "bg-white "
        }`}
      >
        <div className="container  mx-auto flex max-w-[1440px] flex-col md:flex-row justify-start relative md:justify-between ">
          <Link to={"/"} className="text-black w-fit font-bold flex ">
            <img
              src={isTrensparent ? whitelogo : darklogo}
              alt="Logo"
              className="h-6 w-auto inline-block mr-2 "
            />
          </Link>
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-primary focus:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-auto h-6 stroke-primary  transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={` mx-4 mt-3 md:flex   md:m-0 md:items-center gap-3 flex-col md:flex-row ${
              menuOpen ? "" : "hidden"
            }`}
          >
            <li>
              <NavLinkItem to={"/"} isDark={isTrensparent}>
                Home
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to={"/products"} isDark={isTrensparent}>
                Products
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to={"/rooms"} isDark={isTrensparent}>
                Rooms
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to={"/about"} isDark={isTrensparent}>
                About Us
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to={"/contact"} isDark={isTrensparent}>
                Contact Us
              </NavLinkItem>
            </li>
          </ul>
          <div className="absolute right-20 md:relative md:right-0 ">
            <button
              onClick={handleClick}
              className="  text-primary  relative hover:text-gray-300 md:flex items-center"
            >
              <div
                className={`absolute  font-semibold top-[-5px] left-[-10px] flex justify-center items-center p-0 m-0 w-5 h-5 text-[12px] rounded-2xl 
                  text-semi-black bg-primary`}
              >
                {orders.length}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={`w-6 h-6 fill-none stroke-primary`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

// props validation
NavBar.propTypes = {
  handleClick: PropTypes.func,
};

export default NavBar;
