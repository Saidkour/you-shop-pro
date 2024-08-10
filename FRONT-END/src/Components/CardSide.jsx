import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DECRIMENTACTION, INCREMENTACTION, REMOVEORDER } from "../REDUX/OrdersReducer/ActionsOr";
// import { useFetch } from "../../server/useFetch";
// import { FETCHPRODUCT } from "../REDUX/ProductReducer/ActionPr";


export default function CardSide({ toggle }) {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orders.orders);
  console.log('FROM CARDSIDE',orders)

//////////////////////////////////////////

  const [isToggle, setIsToggle] = useState();

  useEffect(() => {
    setIsToggle(toggle);
  }, [toggle]);

  const CloseCart = () => {
    setIsToggle(false);
  };

  if (isToggle) {

    return (
      <>
        <div className="bg-white z-[999999] shadow-md h-screen w-full lg:w-5/12 xl:w-5/12 md:w-8/12 fixed top-0 right-0 ">

          <div className="w-full h-16 flex justify-between items-center px-6 border-b">
            <div className="text-semi-black font-medium">Shopping Cart</div>

            <div onClick={CloseCart} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="w-6 h-6"
              >
                <path d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <div className="w-full h-[58vh] flex flex-col items-center overflow-x-auto py-3 px-3 relative">
            {orders && orders.length > 0 ?
               orders.map((order) => {
                  return (
                    <div
                      key={order.id}
                      className="p-2 mb-3  border w-full h-auto flex justify-between items-center shadow hover:bg-gray-50"
                    >
                      <div className="w-2/12 h-20 flex justify-center items-center bg-slate-100 mr-1">
                        {/* product's img */}
                        <img src={order.img} alt={order.name} />
                      </div>

                      <div className="w-10/12 flex flex-col justify-between items-center">
                        <div className=" w-full px-2 flex justify-between mb-2">
                          <div className="font-bold text-gray-700 hover:text-primary hover:underline">
                            {/* product's title */}
                            <Link onClick={() => CloseCart()} to={`/product/${order.id}`}>{order.name}</Link>
                          </div>
                          <div
                            onClick={() => {
                              dispatch(REMOVEORDER(order.id));
                            }}
                            className="cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="gray"
                              className="w-6 h-6"
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
                              onClick={()=>{dispatch(DECRIMENTACTION(order.id))}}>
                              -
                            </button>
                            <span className="px-3 py-2 border border-black">
                              {order.count}
                            </span>
                            <button
                              className="px-3 py-2 border"
                              onClick={()=>{dispatch(INCREMENTACTION(order.id))}}>
                              +
                            </button>
                          </div>
                          <div className="w-5/12 text-right text-semi-gray px-2 font-semibold">
                            {/* product's price */}
                            MAD {order.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              :
              
               <span className="text-gray-400 font-medium absolute left-32 top-52  ">No products in the cart</span>
            }
          </div>

     {orders && orders.length > 0 ?
            orders.map((order) => {
              // console.log('orders.length > 0',orders)
              return <>
                <div>
                <div className="absolute bottom-36 w-full py-4 px-5 flex justify-between border-t border-b">
                  {/* here will be a state that calculats the total price of all products the client ordered */}
                  <span className="font-bold text-gray-600">Subtotal:</span>
                  <span className="font-medium text-semi-gray">MAD 122</span>
                </div>
                <div className=" absolute left-5 bottom-4 right-5 flex flex-col justify-center items-center">
                <Link className="w-full" to={"ViewCarT"}>
                  <button onClick={CloseCart} className="w-full mb-4 bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
                    VIEW CART
                  </button>
                </Link>

                  <Link className="w-full" to={"/checkout"}>
                    <button onClick={CloseCart} className="w-full bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
                       CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>
              </>
            })
            :
            <button className=" absolute left-6 bottom-4 right-6 bg-primary flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
              <Link to={"/products"}>CONTINUE SHOPPING</Link>
            </button>
          }
        
        </div>

        <div
          onClick={CloseCart}

          className="bg-semi-black bg-opacity-45 fixed z-[999998] top-0 left-0 bottom-0 right-0 h-screen w-full cursor-pointer"
        >
      
        </div>
      </>
    );
  } else {
    ''
  }
}


 

