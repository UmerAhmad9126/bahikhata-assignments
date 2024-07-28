import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import Login from '../pages/LoginPage'
import NotePage from '../pages/NotePage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/note' element={<NotePage />} />



        </Routes>
    )
}

export default AllRoutes