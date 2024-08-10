// import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useFetch } from "../../server/useFetch";
import { ADDTOCART } from "../REDUX/OrdersReducer/ActionsOr";

// give it array of products check /data/db.json

export default function ProductList(){
  // useFetch()
  const list = useSelector((state) => state.products.products.products);
  const orders = useSelector((state) => state.orders.orders);

  console.log('from productList', useSelector((store) => store));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleAddToCart = (id) => {
    const order = orders.find((item) => item.id === id);
    if (order) {
      navigate(`/product/${id}`);
    } else {
      const product = list.find((item) => item.id === id)
      dispatch(ADDTOCART(product, 1));
    }
  };


  return (

    <ul className="grid grid-cols-2 max-[500px]:grid-cols-1  gap-2 md:grid-cols-3 lg:grid-cols-4 ">

      { list && list.map((item) => {
         return  ( <li key={item.id} className="p-1 relative  group  border text-center">
                    <div
                      onClick={() => HandleAddToCart(item.id)}
                      className="hidden group absolute hover:shadow-md  cursor-pointer shadow-lg w-8 h-8 group-hover:grid  place-content-center rounded-full right-5 top-5 z-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-6 h-6 stroke-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </div>
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.img}
                            className="max-w-full w-full "
                            alt={item.name}
                          />
                          <div className="">
                            <p>{item.category}</p>
                            <h3 className="text-secondary">{item.name}</h3>
                            <p>${item.price}</p>
                          </div>
                        </Link>
                  </li> )
       }) } 
    </ul>
  );
};


// ProductList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       img: PropTypes.string,
//       name: PropTypes.string,
//       category: PropTypes.string,
//       price: PropTypes.string,
//     })
//   ),
// };

