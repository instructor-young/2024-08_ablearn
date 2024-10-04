import { Brand, BrandDetail, Response } from "@/types/app.type";
import { ballangAPI } from "./client.api";

/**
 * 전체 브랜드 목록을 제공합니다.
 */
async function getBrands() {
  const response = await ballangAPI.get<Response<Brand[]>>("/brands");
  const brands = response.data.result;

  return brands;
}

/**
 * 특정 브랜드에 대한 정보와 해당 브랜드의 모든 상품 목록을 제공합니다.
 */
async function getBrand(brandId: number) {
  const response = await ballangAPI.get<Response<BrandDetail>>(
    `/brands/${brandId}`
  );
  const brand = response.data.result;

  return brand;
}

const brandsAPI = {
  getBrands,
  getBrand,
};

export default brandsAPI;
