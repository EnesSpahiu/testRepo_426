import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ShoppingCartPage from "../pages/ShoppingCartPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Login />}
      />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/about-us"} element={<AboutUs />} />
      <Route path={"/contact-us"} element={<ContactUs />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/shop"} element={<Shop />} />
      <Route path={"/shop/:id"} element={<ProductDetail />} />
      <Route path={"/shoppingcart"} element={<ShoppingCartPage />} />
    </Routes>
  );
};

export default Router;
