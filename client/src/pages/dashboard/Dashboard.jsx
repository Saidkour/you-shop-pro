import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  allOrders,
  allProducts,
  delivredOrders,
  getUser,
  pendingOrders,
} from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/reducers/productReducer";
import useFetch from "../../hocks/useFetch";
import {
  setDelivredOrders,
  setOrders,
  setPendingOrders,
} from "../../redux/reducers/orderReducer";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: data2, loading: loading2, error: err2 } = useFetch(`/products`);
  const { data: data3, loading: loading3, error: err3 } = useFetch(`/orders`);
  useEffect(() => {
    dispatch(setProducts(data2?.products));
    dispatch(setOrders(data3?.orders));
    const pendingorders = data3?.orders.filter(
      (item) => item.status == "Pending"
    );
    dispatch(setPendingOrders(pendingorders));
    const delivredOrders = data3?.orders.filter(
      (item) => item.status == "Delivred"
    );
    dispatch(setDelivredOrders(delivredOrders));
  }, [data2, data3, location.pathname]);
  const products = useSelector(allProducts);
  const orders = useSelector(allOrders);
  const PendingOrders = useSelector(pendingOrders);
  const DelivredOrders = useSelector(delivredOrders);
  const userCurent = useSelector(getUser) || undefined;
  console.log(userCurent);

  useEffect(() => {
    if (!userCurent) {
      navigate("/admin/login");
    }
  }, [userCurent]);
  return (
    <>
      <div className="p-5">
        <span className="pl-4">welcome</span>
        <div className="container pb-5">
          <span className="font-bold text-2xl mx-4">Mr</span>
          <span className="font-bold text-2xl text-primary">
            {userCurent?.firstName} {userCurent?.lastName}
          </span>
        </div>
        <div className="container grid justify-around grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className=" flex flex-col m-auto justify-center items-center bg-red-400 w-[250px] h-[150px]  rounded-xl my-5 lg:my-0 ">
            <h6 className="text-black text-2xl">total Products</h6>
            <h6 className="text-black mt-5 text-xl font-bold">
              {products?.length}
            </h6>
          </div>
          <div className="flex flex-col m-auto justify-center items-center bg-blue-400  w-[250px] h-[150px] rounded-xl my-5 lg:my-0">
            <h6 className="text-black text-2xl">total Orders</h6>
            <h6 className="text-black mt-5 text-xl font-bold">
              {orders?.length}
            </h6>
          </div>
          <div className="flex flex-col m-auto justify-center items-center bg-green-400  w-[250px] h-[150px] rounded-xl my-5 lg:my-0">
            <h6 className="text-black text-2xl">pending orders</h6>
            <h6 className="text-black mt-5 text-xl font-bold">
              {PendingOrders?.length}
            </h6>
          </div>
          <div className="flex flex-col m-auto justify-center items-center bg-yellow-400  w-[250px] h-[150px] rounded-xl my-5 lg:my-0">
            <h6 className="text-black text-2xl">delivred orders</h6>
            <h6 className="text-black mt-5 text-xl font-bold">
              {DelivredOrders?.length}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
