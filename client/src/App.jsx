import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import ProductPageLayout from "./pages/productPageLayout";
import CategoryPageHeader from "./Components/categoryPageHeader";
import ProductDetails from "./Components/ProductDetails";
import Checkout from "./Components/Checkout";
import ViewCarT from "./Components/View_CarT";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./pages/About.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={store}>
                <Layout />
              </Provider>
            }
          >
            <Route index element={<Home />} />
            <Route path="products" element={<ProductPageLayout />}>
              <Route
                path="category/:category"
                element={<CategoryPageHeader />}
              />
            </Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ViewCarT" element={<ViewCarT />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="card" element={<ViewCarT />} />
            <Route path="*" element={<>check your link 404 route</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
