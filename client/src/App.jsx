import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
import About from "./pages/About";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/Settings";
import AddProduct from "./pages/dashboard/AddProduct";
import DetailsOrder from "./pages/dashboard/DetailsOrder";
import SignUp from "./Components/SignUp";
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
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ViewCarT" element={<ViewCarT />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="card" element={<ViewCarT />} />
            <Route path="products" element={<ProductPageLayout />}>
              <Route
                path="category/:category"
                element={<CategoryPageHeader />}
              />
            </Route>
            <Route path="*" element={<>check your link 404 route</>} />
          </Route>
          <Route
            path="/admin/login"
            element={
              <Provider store={store}>
                <Login />
              </Provider>
            }
          />
          {/* <Route path="/admin/signup" element={<SignUp />} /> */}
          <Route
            path="/dashboard"
            element={
              <Provider store={store}>
                <DashboardLayout />
              </Provider>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/products/add" element={<AddProduct />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/dashboard/orders/:id" element={<DetailsOrder />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="*" element={<>check your link 404 route</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
