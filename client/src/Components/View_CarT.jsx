import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteOrder, updateOrder } from "../redux/reducers/cardReducer";
import { orders } from "../redux/selectors";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ViewCarT() {
  const orderss = useSelector(orders);

  return (
    <>
      <section className="w-full p-5 xl:p-10 lg:p-10 bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-full p-6 bg-white ">
          <div className=" w-auto py-4">
            <h1 className="font-semibold text-[1.9rem] text-black">Cart</h1>
          </div>
          {orderss && orderss.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
              <div className="w-full flex justify-between  ">
                <table className="border w-full border-collapse">
                  {/* <thead > */}
                  <tr className="border grid grid-cols-[1fr_1fr_1fr_1.5fr_1fr]  justify-between max-md:hidden w-full bg-gray-100">
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1">Product</td>
                    <td className="border px-2 py-1">Price</td>
                    <td className="border px-2 py-1">Quantity</td>
                    <td className="border px-2 py-1">Subtotal</td>
                  </tr>
                  {/* </thead> */}
                  <tbody className="">
                    {orderss.map((order) => {
                      return <OrderItem order={order} key={order.id} />;
                    })}
                  </tbody>
                </table>
              </div>
              <TotalTable />
            </div>
          ) : (
            <div>
              <div
                className="w-full flex items-center p-4 mb-4 text-sm text-blue-400 border border-blue-300 rounded-lg bg-blue-50  "
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only text-blue-600">Info</span>
                <div className="text-blue-400">
                  <span className="font-medium text-blue-700">Info alert!</span>
                  <span>
                    {" "}
                    No product in Cart, please check the product page.
                  </span>
                </div>
              </div>
              <div className="">
                <Link
                  to={"/products"}
                  className=" py-3 px-[50px]  text-[.8rem] font-semibold text-black bg-primary  tracking-widest hover:text-white hover:duration-700 "
                >
                  RETURN TO SHOP
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

const OrderItem = ({ order }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteOrder({ id: order.id }));
  };

  return (
    <>
      <tr className=" relative md:grid grid-cols-[1fr_1fr_1fr_1.5fr_1fr] items-center max-h-[100px] justify-between gap-3  w-full mb-[20px] border ">
        <td className="border flex items-center justify-center px-2 py-1  ">
          <img className="max-h-[100px]" loading="lazy" src={order.img} alt={order.name} />
        </td>
        <td className="px-2 py-1 font-bold max-md:flex justify-between items-center    before:md:hidden before:font-bold before:content-['Product:_'] ">
          <Link to={`/product/${order.id}`} className="hover:text-primary">
            {order.name}
          </Link>
        </td>
        <td className=" px-2 py-1 max-md:flex justify-between items-center    before:md:hidden before:font-bold before:content-['Price:_'] ">
          ${order.price}
        </td>
        <td className="px-2 py-1  max-md:flex justify-between items-center   before:md:hidden before:font-bold before:content-['Quantity:_']  ">
          <UpdateQuantity order={order} />
        </td>
        <td className="px-2 py-1 min-w-[90px] max-md:flex justify-between   items-center before:md:hidden before:font-bold before:content-['Subtotal:_']  ">
          <span> ${order.price * order.quantity}</span>
        </td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-6 h-6 stroke-red-400 absolute top-[20px] md:top-[50%] translate-y-[-50%] right-[10px] cursor-pointer"
          onClick={handleDelete}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </tr>
    </>
  );
};

const UpdateQuantity = ({ order }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateOrder({ type: "inc", id: order.id }));
  };
  const handleDecrement = () => {
    dispatch(updateOrder({ type: "dec", id: order.id }));
  };
  const [inputVal, setInputVal] = useState(order.quantity);

  useEffect(() => {
    setInputVal(order.quantity);
  }, [order.quantity]);

  return (
    <div className="">
      <button
        onClick={handleDecrement}
        className="hover:bg-primary border w-[40px] h-[40px] "
        name="-"
      >
        -
      </button>

      <span>
        <input
          disabled
          className="w-[40px] h-[42px] text-center border focus:border-dashed  outline-none"
          type="text"
          name="quantity"
          id="quantity"
          value={inputVal}
        />
      </span>
      <button
        onClick={handleIncrement}
        className="hover:bg-primary border w-[40px] h-[40px]"
        name="+"
      >
        +
      </button>
    </div>
  );
};

const TotalTable = () => {
  const orderss = useSelector(orders);
  const total = orderss.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);

  return (
    <div className="  w-full ">
      <div className="border  ">
        <div className="bg-gray-100 p-4">
          <h1 className="font-bold text-[1.4rem] text-black tracking-wide">
            Cart totals
          </h1>
        </div>
        <div className="flex justify-between p-4 border-b">
          <div>
            <h1 className="text-xl font-medium">Subtotal:</h1>
          </div>
          <div>
            <h1>MAD {total}</h1>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-xl font-medium">Total:</h1>
          </div>
          <div>
            <h1>MAD {total}</h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 border-s border-e">have you coupon?</div>
      <div className="w-full flex justify-center border-s border-e border-b p-4">
        <Link
          to={"/checkout"}
          className="w-11/12 p-4 text-center font-semibold text-xl bg-primary tracking-widest hover:text-white hover:duration-700 "
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

// prop validation
ViewCarT.propTypes = {
  orders: PropTypes.array,
  dispatch: PropTypes.func,
  handleDelete: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  inputVal: PropTypes.number,
  setInputVal: PropTypes.func,
};
OrderItem.propTypes = {
  order: PropTypes.object,
  dispatch: PropTypes.func,
  handleDelete: PropTypes.func,
};

UpdateQuantity.propTypes = {
  order: PropTypes.object,
  dispatch: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  inputVal: PropTypes.number,
  setInputVal: PropTypes.func,
};
