import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartList from '../../Pages/CartList/CartList'
import ContactDetails from '../../Pages/ContactDetail/ContactDetails'
import HomePage from '../../Pages/HomePage/HomePage'
import Login from '../../Pages/Login/Login'
import ProductList from '../../Pages/Productlist/ProductList'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/Cart" element={<CartList/>}></Route>
            <Route path="/contactdetail" element={<ContactDetails/>}></Route>

            <Route path="/productslist/:query" element={<ProductList/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes