import api from "@/api/client.api";
import Page from "@/components/Page";
import AddToCartButton from "./_components/AddToCartButton";

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

async function ProductDetailPage(props: ProductDetailPageProps) {
  const productId = Number(props.params.productId);
  const product = await api.products.getProduct(productId);

  return (
    <Page>
      <h1 className="text-4xl">{product.name}</h1>

      <AddToCartButton productId={productId} />
    </Page>
  );
}

export default ProductDetailPage;
