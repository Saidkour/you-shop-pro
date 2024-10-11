import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../redux/selectors";
import { BASE_URL } from "../../constants";
import useFetch from "../../hocks/useFetch";
import { setOrders } from "../../redux/reducers/orderReducer";
import { Link } from "react-router-dom";

const Orders = () => {
  const Orders = useSelector(allOrders);
  const dispatch = useDispatch();
  const [loadingS, setLoadingS] = useState(false);

  const [filter, setFilter] = useState("");
  const {
    data: data,
    loading: loading,
    error: err,
  } = useFetch(`/orders?status=${filter}`);
  useEffect(() => {
    if (data && !loading) {
      dispatch(setOrders(data?.orders));
    }
  }, [filter, data, loading, dispatch]);
  return (
    <div className="block min-w-full p-5">
      <div className="p-2 min-w-[100%]  bg-white rounded-md">
        <div className="sm:flex block  justify-between p-2 mb-2 items-center ">
          <h2 className="text-xl font-bold ">Tables of Orders</h2>
          <div className=" text-sm font-medium p-3">
            filter par :
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="border border-1 p-2 ml-4"
              defaultValue={""}
            >
              <option value="">all</option>
              <option value="Pending">pending</option>
              <option value="Delivred">delivred</option>
              <option value="Canceled">canceled</option>
            </select>
          </div>
        </div>
        <div className="overflow-auto md:overflow-hidden">
          <table className="w-full text-sm text-left border border-1">
            <thead className="text-xs text-gray-700 text-center  uppercas border border-1">
              <tr>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  user
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  products
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  PriceTotal
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  date
                </th>
                <th scope="col" className="px-6 py-3 text-sm border ">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {loading || loadingS ? (
                <tr>
                  <td className="py-4 border" colSpan={6}>
                    LOADING .......
                  </td>
                </tr>
              ) : Orders?.length !== 0 ? (
                Orders?.map((item, index) => {
                  return (
                    <OrderList
                      setLoadingS={setLoadingS}
                      item={item}
                      key={index}
                    />
                  );
                })
              ) : (
                <tr>
                  <td className="py-4" colSpan={6}>
                    {" "}
                    NO ORDER FOUND
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const OrderList = ({ item, setLoadingS }) => {
  const handleChange = async (status, item) => {
    item.status = status;
    try {
      setLoadingS(true);
      const obj = { status: status };
      const result = await fetch(`${BASE_URL}/orders/${item.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(obj),
      });
      if (result.status === 200) {
        setLoadingS(false);
      }
    } catch (err) {
      setLoadingS(false);
      console.log(err);
    }
  };
  return (
    <tr className="h-[90px]">
      <td className="text-black border">{item?.id}</td>
      <td className="border text-center">
        {item?.user.email}
        <br />
        {item?.user.phone}
      </td>
      <td className="border text-center ">
        <div className="flex">
          {item?.products.map((item, index) => {
            return (
              <div key={index}>
                <p>
                  <span>{!item.id?.img && "Product not exist"}</span>
                  <span>
                    {item.id?.img && (
                      <img
                        width={40}
                        height={40}
                        src={item.id?.img}
                        alt={item.id?.name}
                      />
                    )}
                  </span>
                </p>
                <br />
              </div>
            );
          })}
        </div>
      </td>
      <td className="border text-center">{item?.totalP}</td>
      <td className="border text-center">
        <select
          value={item?.status}
          onChange={(e) => handleChange(e.target.value, item)}
          className={
            item?.status === "Pending"
              ? "text-green-500"
              : item?.status === "Delivred"
              ? "text-blue-500"
              : "text-red-500"
          }
        >
          <option value="Pending">pending</option>
          <option value="Delivred">Delivred</option>
          <option value="Canceled">canceled</option>
        </select>
      </td>
      <td className="border text-center">{item?.createdAt}</td>
      <td className="border text-center">
        {" "}
        <Link
          to={`/dashboard/orders/${item?.id}`}
          className="bg-primary p-2 hover:text-white hover:bg-secondary"
        >
          show
        </Link>
      </td>
    </tr>
  );
};
export default Orders;
