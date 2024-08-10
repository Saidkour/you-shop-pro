import RoomComponent from "../Components/roomComponent";
import SeeLastCol from "../Components/SeeLastCol";
const Rooms = () => {
  const rooms = [
    {
      id: 1,
      room: "Living Room",
      img: "living-room-img.jpg",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
    {
      id: 2,
      room: "Beth room",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      img: "bath-room-img.jpg",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
    {
      id: 3,
      room: "Bedroom",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      img: "bedroom-img.jpg",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
    {
      id: 4,
      room: "kitcheen",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      img: "kitchen-img.jpg",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
    {
      id: 5,
      room: "Home Office",
      disc: "Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.",
      img: "home-office-img.jpg",
      items: [
        "Massa cras egestas laoreet montes",
        "dapibus eu sit etiam curabitur",
        "faucibus habitasse lectus vestibulum leo",
        "odio dolor quis maecenas faucibus vulputate pharetra",
        "Nulla placerat viverra",
        "Cursus viverra",
        "Vitae interdum eget",
        "Risus tempus elementum",
        "Aliquet dignissim",
      ],
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="flex justify-center items-center mb-5  mt-10 flex-col m-auto text-center max-w-[700px]">
          <h1 className="text-7xl font-semibold my-5 text-semi-black">Rooms</h1>
          <p className="text-semi-black text-lg mb-10">
            Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
            tellus aliquet tellus iaculis tempus, sollicitudin massa duis
            eleifend egestas turpis sit etiam.
          </p>
        </div>
      </div>
      {rooms &&
        rooms.map((room) => {
          return <RoomComponent key={room.id} room={room} />;
        })}

      <SeeLastCol />
    </div>
  );
};

export default Rooms;
