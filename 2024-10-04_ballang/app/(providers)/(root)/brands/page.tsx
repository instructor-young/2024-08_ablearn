import api from "@/api/client.api";
import Page from "@/components/Page";
import ProductsList from "@/components/ProductsList";
import Link from "next/link";

interface BrandsPageProps {
  searchParams: {
    brandId: string;
  };
}

async function BrandsPage(props: BrandsPageProps) {
  const brandId = Number(props.searchParams.brandId);
  const brands = await api.brands.getBrands();

  let products;

  if (!!brandId) {
    const brand = await api.brands.getBrand(brandId);
    products = brand.products;
  } else {
    products = await api.products.getProducts();
  }

  return (
    <Page>
      <section className="mb-20">
        <div className="flex justify-center mb-5">
          <Link href={"/brands"}>All</Link>
        </div>
        <ul className="w-[800px] grid grid-cols-6 gap-5 mx-auto text-sm">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
            </li>
          ))}
        </ul>
      </section>

      <ProductsList products={products} />
    </Page>
  );
}

export default BrandsPage;
