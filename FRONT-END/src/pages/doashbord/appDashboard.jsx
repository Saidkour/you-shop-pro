import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Layoute from './layoute'
import AddProduct from '../../Components/DashboardComponent/addProduct'
import OrdersList from '../../Components/DashboardComponent/ordersList'
import FeedBack from '../../Components/DashboardComponent/feedBack'
import ProductsList from '../../Components/DashboardComponent/productList'
import OrderTable from '../../Components/DashboardComponent/OrderTable'
import OrderDetails from '../../Components/DashboardComponent/orderDetails'


export default function AppDashboard() {
  return (    
    <Routes>
          <Route path="/" element={<Layoute />}>
             <Route path="/" element={<OrdersList />}>
                <Route index element={<OrderTable />} />
                <Route path="orders/pending" element={<OrderTable />} />
                <Route path="orders/completed" element={<OrderTable />} />
                <Route path="orders/cancelled" element={<OrderTable />} />
              </Route>

            <Route path=":id" element={<OrderDetails />} />
            <Route path="orders/pending/:id" element={<OrderDetails />} />
            <Route path="orders/completed/:id" element={<OrderDetails />} />
            <Route path="orders/cancelled/:id" element={<OrderDetails />} />
            
            <Route path="addProducts" element={<AddProduct />} />
            <Route path="productsList" element={<ProductsList />} />
            <Route path="feedback" element={<FeedBack />} />
         </Route> 
        <Route path="*" element={<>check your link 404 route</>} />
  </Routes>
  )
}
