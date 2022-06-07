import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Verify from "../pages/Verify";
import ProductsBySub from "../pages/productBySubCategory";
import Product from "../pages/product";
import MyCart from "../pages/MyCart/MyCart/index";
import Category from "../pages/Categories/Categories/index";
import Checkout from "../pages/Checkout/Checkout/index";
import PriceDetails from "../pages/PriceInfo/index";
import CoupanPage from "../pages/Coupons/index.jsx";
import ReferPage from "../pages/Refer/index";
import CarrierPage from "../pages/Carrier/Carrier/index";
import OrderDetails from "../pages/Order/index";
import BalancePage from "../pages/Wallet/index";
import Profile from "../pages/Profile/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/product/:subcategory/:scid" element={<ProductsBySub />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product/:sid" element={<Product />} />
      <Route path="/cart" element={<MyCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pricedetails" element={<PriceDetails />} />
      <Route path="/coupon" element={<CoupanPage />} />
      <Route path="/refer" element={<ReferPage />} />
      <Route path="/carrier" element={<CarrierPage />} />
      <Route path="/orderdetails" element={<OrderDetails />} />
      <Route path="/balance" element={<BalancePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
