import axios from "axios";
import authAPI from "./auth.api";
import brandsAPI from "./brands.api";
import cartAPI from "./cart.api";
import productsAPI from "./products.api";

export const ballangAPI = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  brands: brandsAPI,
  cart: cartAPI,
  products: productsAPI,
};

export default api;
