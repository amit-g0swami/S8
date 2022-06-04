import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Verify from "../pages/Verify";
import ProductsBySub from "../pages/productBySubCategory";
import Product from "../pages/product";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/product/:subcategory/:scid" element={<ProductsBySub />} />
      <Route path="/product/:sid" element={<Product />} />
    </Routes>
  );
}
