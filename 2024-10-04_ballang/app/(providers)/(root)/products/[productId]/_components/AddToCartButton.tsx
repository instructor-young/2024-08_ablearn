"use client";

import api from "@/api/client.api";
import LogInModal from "@/components/LogInModal";
import { useAuthStore } from "@/zustand/auth.store";
import { useModalStore } from "@/zustand/modal.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface AddToCartButtonProps {
  productId: number;
}

function AddToCartButton({ productId }: AddToCartButtonProps) {
  const queryClient = useQueryClient();
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: api.cart.addItemToCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const { mutate: clearItemInCart } = useMutation({
    mutationFn: api.cart.clearItemInCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const isProductInCart = !!cart?.items.find(
    (cartItem) => cartItem.productId === productId
  );

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const openModal = useModalStore((state) => state.openModal);

  const handleClickButton = async () => {
    if (!isLoggedIn) return openModal(<LogInModal />);

    if (isProductInCart) {
      clearItemInCart(productId);
    } else {
      addItemToCart(productId);
    }
  };

  return (
    <button
      className="bg-black py-4 px-20 text-white font-bold"
      onClick={handleClickButton}
    >
      {isProductInCart ? "장바구니에서 빼기" : "장바구니에 추가하기"}
    </button>
  );
}

export default AddToCartButton;
