import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavBarDash from "./NavBarDash";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { RxDashboard } from "react-icons/rx";
import { AiFillProduct } from "react-icons/ai";
import {
  HiMiniShoppingCart,
  HiMiniCog8Tooth,
  HiMiniArrowDownRight,
  HiMiniArrowRight,
  HiMiniArrowLeft,
} from "react-icons/hi2";

const DashboardLayout = () => {
  const userCurent = useSelector(getUser) || undefined;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userCurent) {
      navigate("/admin/login");
    }
  }, [userCurent]);
  const [toogleOpen, setToogleOpen] = useState(false);

  return (
    <>
      {!userCurent ? (
        <div className="flex justify-center place-items-center w-full h-full m-auto font-bold text-primary text-4xl">
          LOADING
        </div>
      ) : (
        <>
          <NavBarDash />
          <div className="grid lg:grid-cols-12 sm:grid-cols-6 ">
            <div className={`hidden lg:block sm:col-span-2 shadow-md min-h-[100vh]  pt-[64px]  ${
                toogleOpen
                  ? "lg:col-span-2 xl:col-span-2"
                  : "lg:col-span-1 xl:col-span-1"
              } bg-primary`}
            >
              <div className="flex  flex-col  p-5 ">
                {toogleOpen ? (
                  <div>
                    <span
                      onClick={() => setToogleOpen((perv) => !perv)}
                      className="flex justify-end cursor-pointer font-bold text-semi-black text-xl hover:text-white "
                    >
                      <HiMiniArrowLeft  />
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      onClick={() => setToogleOpen((perv) => !perv)}
                      className="flex justify-end cursor-pointer font-bold text-semi-black text-xl hover:text-white"
                    >
                      <HiMiniArrowRight />
                    </span>
                  </div>
                )}
                <div className="flex m-auto justify-center font-medium  text-center py-5">
                  <Link
                    to={"/dashboard"}
                    className="text-black hover:text-white"
                  >
                    <span className="flex justify-between text-primary">
                      <RxDashboard className="text-2xl " />
                      {toogleOpen ? (
                        <span className="ml-4">Dashboard</span>
                      ) : (
                        ""
                      )}
                    </span>
                  </Link>
                </div>
                <div className="flex m-auto justify-center font-medium text-center py-5">
                  <Link
                    to={"/dashboard/products"}
                    className="text-black hover:text-white"
                  >
                    <span className="flex justify-between text-primary">
                      <AiFillProduct className="text-2xl" />
                      {toogleOpen ? <span className="ml-4">Products</span> : ""}
                    </span>
                  </Link>
                </div>
                <div className="flex m-auto justify-center font-medium text-center py-5">
                  <Link
                    to={"/dashboard/orders"}
                    className="text-black hover:text-white"
                  >
                    <span className="flex justify-between text-primary">
                      <HiMiniShoppingCart className="text-2xl " />
                      {toogleOpen ? <span className="ml-4">Orders</span> : ""}
                    </span>
                  </Link>
                </div>
                <div className="flex m-auto justify-center font-medium text-center py-5">
                  <Link
                    to={"/dashboard/settings"}
                    className="text-black hover:text-white"
                  >
                    <span className="flex justify-between text-primary">
                      <HiMiniCog8Tooth className="text-2xl " />
                      {toogleOpen ? <span className="ml-4">Settings</span> : ""}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={` col-span-4  mt-[64px]  sm:col-span-12 ${
                toogleOpen
                  ? "lg:col-span-9 xl:col-span-10"
                  : "lg:col-span-10 xl:col-span-11"
              }`}
            >
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
