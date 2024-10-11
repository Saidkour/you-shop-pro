import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allOrders } from "../../redux/selectors";

const DetailsOrder = () => {
  const { id } = useParams();
  const Orders = useSelector(allOrders);
  console.log(Orders);
  const order = Orders?.find((item) => {
    return item.id === id;
  });
  return (
    <>
      {order ? (
        <div className="p-9">
          <div className="border border-secondary grid grid-cols-1 md:grid-cols-4 p-3 rounded-sm min-w-full ">
            <div className=" col-span-2 p-4 md:border-r border-primary ">
              <h6 className="font-bold mb-4 text-primary">User Information</h6>
              <p className="flex flex-col justify-between">
                <span className="mb-2 ">
                  Name:{" "}
                  <span className="text-black font-medium p-4">
                    {order?.user.firstName} {order.user?.lastName}
                  </span>
                </span>
                <span className="mb-2  ">
                  Email:{" "}
                  <span className="text-black font-medium p-4">
                    {order?.user.email}
                  </span>
                </span>
                <span className="mb-2 ">
                  Phone Number:{" "}
                  <span className="text-black font-medium p-4">
                    {order?.user.phone}
                  </span>
                </span>
                <span className="mb-2 ">
                  city:{" "}
                  <span className="text-black font-medium p-4">
                    {order?.user.city}
                  </span>
                </span>
                <span className="mb-2 ">
                  company Name:{" "}
                  <span className="text-black font-medium p-4">
                    {order?.user.companyName}
                  </span>
                </span>
              </p>
            </div>
            <div className=" col-span-2 p-4">
              <h6 className="font-bold text-primary">Product Information</h6>
              <p className="flex flex-col justify-between">
                {order?.products.map((item, index) => {
                  console.log(item);
                  return (
                    <div className="border text-center" key={index}>
                      <p className="flex  text-center justify-between p-2">
                        <span className=" w-[150px] md:w-[200px]">
                          {item.id?.name || "Product not exist"}
                        </span>
                        <span>
                          <img
                            width={30}
                            height={30}
                            src={item.id.img}
                            alt={item.id.name}
                          />
                        </span>
                        <span className="text-center">{item?.quantity}</span>
                        <span className="text-center">
                          {item?.totalPrice} DH
                        </span>
                      </p>
                    </div>
                  );
                })}
              </p>
              <p className="flex mt-4 justify-between">
                <span>total : </span>
                <span>
                  {order?.products.reduce((total, item) => {
                    return total + item.totalPrice;
                  }, 0)}{" "}
                  DH
                </span>
              </p>
              <p className="flex mt-4 justify-between">
                <span>status:</span>
                <span>{order?.status}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>NOT FOUND</div>
      )}
    </>
  );
};

export default DetailsOrder;
