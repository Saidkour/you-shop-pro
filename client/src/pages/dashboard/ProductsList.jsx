import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdDelete, MdDeleteOutline, MdUpdate } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
export default function ProductsList({ list }) {
  return (
    <ul className="grid grid-cols-2 max-[600px]:grid-cols-1 p-5  gap-2 md:grid-cols-3 xl:grid-cols-4">
      {list && list?.length > 0
        ? list.map((item) => {
            return <ItemProduct key={item.id} product={item} />;
          })
        : "No Products Found"}
    </ul>
  );
}
const ItemProduct = ({ product: { id, img, name, price, category } }) => {
  return (
    <li className="p-4 justify-between rounded-md flex flex-col  mt-3 ml-3 group shadow-lg hover:shadow-primary  text-center">
      <Link to={`/product/${id}`}>
        <img
          src={img}
          className="m-auto"
          loading="lazy"
          alt={name}
          width={200}
        />
      </Link>
      <div className="">
        <p className="text-semi-black">{category}</p>
        <h3 className="text-secondary">{name}</h3>
        <p>MAD {price}</p>
        <p className="pt-3">
          <button className="   text-white cursor-pointer">
            <FaRegEdit fill="#edb932" className="text-2xl flex m-auto " />
          </button>
          <button className="  text-white cursor-pointer   ml-2">
            <MdDeleteOutline fill="#991b1b" className="text-2xl flex m-auto " />
          </button>
        </p>
      </div>
    </li>
  );
};

// prop types validation

ItemProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

ProductsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      img: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};
