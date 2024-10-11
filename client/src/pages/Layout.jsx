import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/footer";
import { toggleCard, setOrders } from "../redux/reducers/cardReducer";
import { orders, toggleSideCard } from "../redux/selectors";
import { useEffect, useRef } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  const dispatch = useDispatch();
  const showSideCard = useSelector(toggleSideCard);
  let order = useSelector(orders);
  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) {
      const localOrder = window.localStorage.getItem("order");
      if (localOrder) {
        dispatch(setOrders(JSON.parse(localOrder)));
      }
      firstLoad.current = false;
    }
  }, [dispatch]);
  useEffect(() => {
    window.localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const handleClick = () => {
    dispatch(toggleCard());
  };

  return (
    <>
      <NavBar handleClick={handleClick} />
      {showSideCard && <CardSide />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
