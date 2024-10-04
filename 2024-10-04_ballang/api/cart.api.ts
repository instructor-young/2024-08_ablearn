import { Cart, CartItem, Response } from "@/types/app.type";
import { ballangAPI } from "./client.api";

/**
 * 사용자의 장바구니 내용을 제공합니다.
 */
async function getCart() {
  const response = await ballangAPI.get<Response<Cart>>("/cart");
  const cart = response.data.result;

  return cart;
}

/**
 * 사용자의 장바구니에 상품을 추가합니다.
 */
async function addItemToCart(productId: number) {
  const response = await ballangAPI.post<Response<CartItem>>(
    `/cart/products/${productId}`
  );
  const cartItem = response.data.result;

  return cartItem;
}

/**
 * 사용자의 장바구니에서 상품을 차감합니다
 */
async function removeItemFromCart(productId: number) {
  const response = await ballangAPI.delete<Response<CartItem>>(
    `/cart/products/${productId}`
  );
  const cartItem = response.data.result;

  return cartItem;
}

/**
 * 사용자의 장바구니에서 상품을 제거합니다.
 */
async function clearItemInCart(productId: number) {
  await ballangAPI.delete(`/cart/products/${productId}/clear`);
}

const cartAPI = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearItemInCart,
};

export default cartAPI;
