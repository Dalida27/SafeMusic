import React from 'react'
import './Admin.css'
import Navbar from "../../components/admin/navbar/Navbar"
import ViewProducts from "../../components/admin/viewProducts/ViewProducts"
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/admin/addProduct/AddProduct'
import Orders from '../../components/admin/orders/Orders'

const Admin = () => {
  return (
    <div className='admin'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='content'>
            <Routes>
                <Route path="all-products" element={<ViewProducts />}/>
                <Route path="add-product/:id" element={<AddProduct/>}/>
                <Route path="orders" element={<Orders/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin