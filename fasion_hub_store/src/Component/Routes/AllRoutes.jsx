import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartList from '../../Pages/CartList/CartList'
import ContactDetails from '../../Pages/ContactDetail/ContactDetails'
import HomePage from '../../Pages/HomePage/HomePage'
import Login from '../../Pages/Login/Login'
import Productlist from '../../Pages/Product/Productlist'
import SingleProductPage from '../../Pages/SingleProduct/SingleProduct'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/Cart" element={<CartList/>}></Route>
            <Route path="/contactdetail" element={<ContactDetails/>}></Route>
            <Route path="/:query/SingleProduct/:id" element={<SingleProductPage/>}></Route>


            <Route path="/productslist/:query" element={<Productlist/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes