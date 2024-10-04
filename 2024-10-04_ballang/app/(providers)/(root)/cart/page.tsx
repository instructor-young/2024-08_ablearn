"use client";

import api from "@/api/client.api";
import Page from "@/components/Page";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: api.cart.addItemToCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const { mutate: removeItemFromCart } = useMutation({
    mutationFn: api.cart.removeItemFromCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return (
    <Page>
      {isLoading ? (
        <p>장바구니를 불러오는 중입니다...❤️</p>
      ) : cart!.items.length > 0 ? (
        <ul>
          {cart!.items.map((cartItem) => (
            <li key={cartItem.id}>
              <strong>{cartItem.product.name}</strong>
              <span className="px-5 text-red-500">{cartItem.quantity}</span>
              <button
                onClick={() => removeItemFromCart(cartItem.productId)}
                className="border border-black px-4"
              >
                -
              </button>
              <button
                onClick={() => addItemToCart(cartItem.productId)}
                className="border border-black px-4"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>장바구니에 아무것도 없습니다...</p>
      )}
    </Page>
  );
}

export default CartPage;
