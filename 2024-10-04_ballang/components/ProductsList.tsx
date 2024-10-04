import { Product } from "@/types/app.type";
import Link from "next/link";

interface ProductsListProps {
  products: Product[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className="grid grid-cols-6 gap-5">
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
