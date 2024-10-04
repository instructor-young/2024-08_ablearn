"use client";

import api from "@/api/client.api";
import ProductsList from "@/components/ProductsList";
import { Product } from "@/types/app.type";
import { useQuery } from "@tanstack/react-query";

function AllProducts({ products: passedProducts }: { products: Product[] }) {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: api.products.getProducts,
    initialData: passedProducts,
  });

  return <ProductsList products={products} />;
}

export default AllProducts;
