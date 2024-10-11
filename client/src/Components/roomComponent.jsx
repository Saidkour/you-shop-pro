import PropTypes from "prop-types";
import ProductList from "../Components/ProductList";
import useFetch from "../hocks/useFetch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const RoomComponent = ({ room }) => {
  const {
    data: data2,
    loading: loading2,
    error: err2,
  } = useFetch(
    `/products?fields=category,name,price,img&limit=4&category=${room.room.replace(
      /\s/g,
      ""
    )}`
  );

  const list = data2?.products;

  return (
    <div className="bg-semi-white pb-10">
      <div
        style={{ "--bg-img": `url(/rooms/${room.img})` }}
        className={`bg-[image:var(--bg-img)] bg-cover w-full pt-[100px]`}
        id={room.room}
      >
        <div className="container overflow-hidden px-10 lg:grid h-full grid-cols-2">
          <motion.div
            whileInView={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white relative   h-full col-start-2  before:absolute before:top-[-30px] before:left-[-30px] before:z-10 before:content-['']  before:w-0 before:h-0 before:border-primary before:border-[30px] before:border-x-transparent before:border-t-transparent before:rotate-[-45deg] pt-16 pe-2 sm:ps-10 ps-2 text-lg
          "
          >
            <h5 className="text-2xl font-bold mb-3">{room.room}</h5>
            <p className="px-2">{room.disc}</p>
            <ul className="px-2 mt-3">
              {room.items &&
                room.items.map((item, i) => {
                  return (
                    <li key={i} className=" pb-1">
                      <span className="w-4 h-1 me-2 p-0 bg-primary inline-block"></span>
                      <span> {item}</span>
                    </li>
                  );
                })}
            </ul>
            <div className="max-sm:flex items-center justify-center">
              <button className="bg-primary py-3 px-10 mt-5 mb-10 uppercase tracking-wider text-semi-black font-semibold">
                <Link to={`/products/category/${room.room}`}>
                  shop {room.room}
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container px-10 py-10 ">
        <ProductList list={list} />
      </div>
    </div>
  );
};

RoomComponent.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    room: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    disc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
export default RoomComponent;
