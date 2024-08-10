import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/about";

import Home from "./pages/home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import ProductPageLayout from "./pages/productPageLayout";
import CategoryPageHeader from "./Components/categoryPageHeader";
import ProductDetails from "./Components/ProductDetails";
import ViewCarT from "./Components/View_CarT";
import Checkout from "./Components/Checkout";
import AppDashboard from "./pages/doashbord/appDashboard";
import Login from "./Components/LoginClient/login";
import Register from "./Components/LoginClient/register";
import Admin from "./Components/DashboardComponent/loginAdmin/login";


function App() {

  return (

    
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductPageLayout />}>
                <Route
                  path="category/:category"
                  element={<CategoryPageHeader />}
                />
              </Route>

              <Route  path="/product/:id"  element={<ProductDetails/>} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="ViewCarT" element={<ViewCarT/>} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
               
              <Route path="*" element={<>check your link 404 route</>} />
          </Route>
          <Route path="/dashboard/*" element={<AppDashboard />} />
        </Routes>
        
          
      </BrowserRouter>
    
  );
}
export default App;
