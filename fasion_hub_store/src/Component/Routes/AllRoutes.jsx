import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import Login from '../../Pages/Login/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes