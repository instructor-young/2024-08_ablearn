import { Product, Response } from "@/types/app.type";
import { ballangAPI } from "./client.api";

/**
 * 전체 상품 목록을 제공합니다.
 */
async function getProducts() {
  const response = await ballangAPI.get<Response<Product[]>>("/products");
  const products = response.data.result;

  return products;
}

/**
 * 특정 상품의 정보를 제공합니다.
 */
async function getProduct(productId: number) {
  const response = await ballangAPI.get<Response<Product>>(
    `/products/${productId}`
  );
  const product = response.data.result;

  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
