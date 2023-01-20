import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import Login from '../../Pages/Login/Login'
import ProductList from '../../Pages/Productlist/ProductList'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/productslist/:query" element={<ProductList/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes