import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteOrder,
  toggleCard,
  updateOrder,
} from "../redux/reducers/cardReducer";
import { orders } from "../redux/selectors";
import PropTypes from "prop-types";

export default function CardSide() {
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  };
  const dispatch = useDispatch();
  const cardOrders = useSelector(orders);

  // calculate the total price for the ordres
  const total = formatNumber(
    cardOrders.reduce(
      (acc, curr) => (acc += parseFloat(curr.price) * curr.quantity),
      0
    )
  );

  function toggleCArd() {
    dispatch(toggleCard());
  }
  return (
    <>
      <div className="bg-white z-[999999] shadow-md h-screen w-full lg:w-5/12 xl:w-5/12 md:w-8/12 fixed top-0 right-0">
        <div className="w-full h-16 flex justify-between items-center px-6 border-b">
          <div className="text-semi-black font-medium">Shopping Cart</div>
          <button onClick={toggleCArd} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full max-h-[calc(100vh-240px)] h-full  flex flex-col items-center overflow-y-auto py-6 px-3 relative">
          {cardOrders?.length > 0 ? (
            cardOrders.map((order) => {
              return <CardItem order={order} key={order.id} />;
            })
          ) : (
            <span className="absolute top-1/2 text-gray-400 text-center font-medium ">
              No products in the cart
            </span>
          )}
        </div>
        {cardOrders.length > 0 ? (
          <div>
            <div className=" w-full py-4 px-5 flex justify-between border-t border-b">
              {/* here will be a state that calculats the total price of all products the client ordered */}
              <span className="font-bold text-gray-600">Subtotal:</span>
              <span className="font-medium text-semi-gray">MAD {total}</span>
            </div>
            <div className=" px-5 flex flex-col justify-center items-center">
              <Link
                onClick={toggleCArd}
                to={"ViewCarT"}
                className="w-full mb-4 bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:duration-500 "
              >
                VIEW CART
              </Link>
              <Link
                onClick={toggleCArd}
                to={"/checkout"}
                className="w-full bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white  hover:duration-500 "
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        ) : (
          <button className=" absolute left-6 bottom-4 right-6 bg-primary flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white  hover:duration-500 ">
            <Link onClick={toggleCArd} to={"/products"}>
              CONTINUE SHOPPING
            </Link>
          </button>
        )}
      </div>

      <div
        onClick={toggleCArd}
        className="bg-semi-black bg-opacity-45 fixed z-[999998] top-0 left-0 bottom-0 right-0 h-screen w-full cursor-pointer"
      ></div>
    </>
  );
}

const CardItem = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/product/${order.id}`);
    dispatch(toggleCard());
  };
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  };
  return (
    <div
      key={order.id}
      className="p-2 mb-2 border w-full h-auto flex justify-between items-center shadow-lg"
    >
      <div className="w-2/12 h-20 flex justify-center items-center bg-slate-100 mr-1">
        {/* product's img */}
        <img src={order.img} alt="img" />
      </div>

      <div className="w-10/12 flex flex-col justify-between items-center">
        <div className=" w-full px-2 flex justify-between mb-2">
          <button
            onClick={handleProductDetails}
            className="font-bold text-gray-700"
          >
            {order.name}
          </button>
          <div
            onClick={() => {
              dispatch(deleteOrder({ id: order.id }));
            }}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-red-500"
            >
              <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="w-4/12 flex font-semibold text-semi-gray ">
            {/* here we can get the order number for each product */}
            <button
              className="px-3 py-2 border"
              onClick={() => {
                dispatch(updateOrder({ id: order.id, type: "dec" }));
              }}
            >
              -
            </button>
            <span className="px-3 py-2 border border-black">
              {order.quantity}
            </span>
            <button
              className="px-3 py-2 border"
              onClick={() => {
                dispatch(updateOrder({ id: order.id, type: "inc" }));
              }}
            >
              +
            </button>
          </div>
          <div className="w-5/12 text-right text-semi-gray px-2 font-semibold">
            MAD {formatNumber(order.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

// prop types validation
CardItem.propTypes = {
  order: PropTypes.object.isRequired,
};
