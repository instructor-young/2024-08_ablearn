import api from "@/api/client.api";
import Page from "@/components/Page";
import AllProducts from "./_components/AllProducts";

async function HomePage() {
  const products = await api.products.getProducts();

  return (
    <Page>
      <AllProducts products={products} />
      {/* <ProductsList products={products} /> */}
    </Page>
  );
}

export default HomePage;
