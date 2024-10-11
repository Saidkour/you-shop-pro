import { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import darklogo from "../../Assets/kayuu-Logo-dark.svg";
import whitelogo from "../../Assets/kayuu-Logo-white.svg";
import { BASE_URL } from "../../constants";
import { HiX } from "react-icons/hi";

const NavBarDash = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  const [isTrensparent, setIsTransparent] = useState(false);
  useEffect(() => {
    setUrl(location.pathname);
    if (url === "/") {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [location, url]);
  function handleLinkClick() {
    setMenuOpen(false);
  }

  // const cardOrdersCount = useSelector(orders).length;
  const dispatch = useDispatch();
  const handleClick = async () => {
    console.log("you are logout !!");
    const logout = await fetch(`${BASE_URL}/user/logout`, {
      method: "GET",
      credentials: "include",
    });
    if (logout.status == 200) {
      dispatch({ type: "set_user", payload: undefined });
      Navigate("/admin/login");
    }
  };
  return (
    <>
      <nav
        className={`py-5 px-10 shadow-lg  ${
          isTrensparent
            ? menuOpen
              ? "bg-semi-black relative  z-[999] top-0 left-0 w-full"
              : "bg-transparent absolute z-[999] top-0 left-0 w-full"
            : "bg-white fixed top-0 w-full "
        }`}
      >
        <div className="container  mx-auto flex max-w-[1440px] flex-col lg:flex-row justify-start relative lg:justify-between ">
          <Link to={"/"} className="text-black w-fit font-bold flex ">
            <img
              src={isTrensparent ? whitelogo : darklogo}
              alt="Logo"
              className="h-6 w-auto inline-block mr-2 "
            />
          </Link>
          <ul
            className={` mx-4 mt-3 lg:hidden  text-black  md:m-0 md:items-center gap-3 flex-col md:flex-row ${
              menuOpen ? "" : "hidden"
            }`}
          >
            <li className="my-2 ">
              <Link
                to={"/dashboard"}
                className="hover:text-primary font-medium"
                onClick={handleLinkClick}
              >
                dashboard
              </Link>
            </li>
            <li className="my-2 ">
              <Link
                to={"/dashboard/products"}
                className="hover:text-primary font-medium"
                onClick={handleLinkClick}
              >
                Products
              </Link>
            </li>
            <li className="my-2 hover:text-primary font-medium">
              <Link
                to={"/dashboard/orders"}
                className="hover:text-primary font-medium"
                onClick={handleLinkClick}
              >
                Orders
              </Link>
            </li>
            <li className="my-2 ">
              <Link
                to={"/dashboard/settings"}
                className="hover:text-primary font-medium"
                onClick={handleLinkClick}
              >
                Settings
              </Link>
            </li>
            <li className="my-2 ">
              <span
                className="cursor-pointer hover:text-primary font-medium"
                onClick={handleClick}
              >
                Logout
              </span>
            </li>
          </ul>
          <div className="lg:hidden absolute right-0">
            {menuOpen ? (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`text-primary focus:outline-none`}
              >
                {/* <HiX style={{color:"#ffffff"}} className="text-2xl " /> */}
                <svg
                  stroke="primary"
                  fill="#edb932"
                  viewBox="0 0 20 20"
                  className="text-2xl text-primary "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`text-primary focus:outline-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-auto  h-6 stroke-primary  transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="absolute right-20 md:relative md:right-0 ">
            <button
              onClick={handleClick}
              className="text-primary hidden relative cursor-pointer hover:text-gray-300 lg:flex items-center"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarDash;
