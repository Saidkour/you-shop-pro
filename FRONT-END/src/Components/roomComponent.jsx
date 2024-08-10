import PropTypes from "prop-types";
import ProductList from "../Components/ProductList";
const RoomComponent = ({ room }) => {
  const list = [
    {
      id: 1928,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-island-set-300x300.png",
      name: "White Kitchen Island",
      price: "5,350.75",
      category: "Kitchen",
    },
    {
      id: 2002,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-300x300.png",
      name: "Beige Working Chair With Armrest",
      price: "784.00",
      category: "Home Office",
    },
    {
      id: 3229,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-300x300.png",
      name: "King Size Master Bedroom",
      price: "14,500.50",
      category: "Bedroom",
    },
    {
      id: 9735,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      name: "Ceramic Oval Bathtub",
      price: "11,200.00",
      category: "Bathroom",
    },
  ];
  return (
    <div className="bg-semi-white pb-10">
      <div
        style={{ "--bg-img": `url(/rooms/${room.img})` }}
        className={`bg-[image:var(--bg-img)] bg-cover w-full pt-[100px]`}
        id={room.room}
      >
        <div className="container px-10 lg:grid h-full grid-cols-2">
          <div
            className="bg-white relative h-full col-start-2  before:absolute before:top-[-30px] before:left-[-30px] before:z-10 before:content-['']  before:w-0 before:h-0 before:border-primary before:border-[30px] before:border-x-transparent before:border-t-transparent before:rotate-[-45deg] pt-16 pe-2 sm:ps-10 ps-2 text-lg
          "
          >
            <h5 className="text-2xl font-bold mb-3">{room.room}</h5>
            <p className="">{room.disc}</p>
            <ul className=" mt-3">
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
                shop {room.room}
              </button>
            </div>
          </div>
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
