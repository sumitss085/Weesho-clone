import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartList from '../../Pages/CartList/CartList'
import ContactDetails from '../../Pages/ContactDetail/ContactDetails'
import HomePage from '../../Pages/HomePage/HomePage'
import Login from '../../Pages/Login/Login'
import Productlist from '../../Pages/Product/Productlist'
import SingleProductPage from '../../Pages/SingleProduct/SingleProduct'

import Checkout from "../../Pages/Checkout/Checkout"
import Form from '../../Pages/Checkout/Address'
import Address from '../../Pages/Checkout/Address'
import Payment from '../../Pages/Payment/Payment'
import SearchSingleProductPage from '../../Pages/SearchSingleProduct/SearchSingleProduct'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/Cart" element={<CartList/>}></Route>
            <Route path="/contactdetail" element={<ContactDetails/>}></Route>
            <Route path="/:query/SingleProduct/:id" element={<SingleProductPage/>}></Route>

            <Route path="/SingleProduct/:id" element={<SearchSingleProductPage/>}></Route>
            
            <Route path="/productslist/:query" element={<Productlist/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>

            <Route path="/address" element={<Address/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes