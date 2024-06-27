import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"

const BreadCrumbMain = () => {
  return (
    <div>
      <div>Bread Crumb</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default BreadCrumbMain
