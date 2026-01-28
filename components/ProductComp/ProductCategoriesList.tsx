// E:\kallu_box_web\kallu_box\components\ProductComp\ProductCategoriesList.tsx

import Image from "next/image";
import ProductCategoryCarousel from "./ProductCategoryCarousel";

interface ApiCategory {
  term_id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
  meta_fields: {
    image: string[];
  };
  products: Array<{
    ID: number;
    title: string;
    slug: string;
    featured_image: string;
    meta_fields: {
      name?: string[];
      "item-code"?: string[];
      gallery?: string[];
      [key: string]: any;
    };
  }>;
}

interface ApiResponse {
  status: boolean;
  taxonomy: string;
  count: number;
  data: ApiCategory[];
}

async function fetchCategories(): Promise<ApiCategory[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not defined in .env.local or environment variables",
    );
  }

  const url = `${baseUrl}/products-by-taxonomy/product_category`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // cache 1 hour — change to 0 or 'no-store' if needed
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories: ${res.status} ${res.statusText}`,
    );
  }

  const data: ApiResponse = await res.json();

  if (!data.status) {
    throw new Error("API returned unsuccessful status");
  }

  // Show ALL categories — no filter
  return data.data;
}

export default async function ProductCategoriesList() {
  let categories: ApiCategory[] = [];

  try {
    categories = await fetchCategories();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <div className="py-16 text-center text-red-600 font-medium">
        Unable to load collections right now. Please try again later.
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="py-16 text-center text-gray-600">
        No categories found.
      </div>
    );
  }

  return (
    <div
      className=" bg-white/75
  bg-[url('/images/pastel-orange-rough-concrete-textured-background.webp')] 
  bg-repeat bg-contain bg-center 
  bg-blend-overlay "
    >
      <div className="relative mb-10 w-full h-[300px]">
        <Image
          src="/images/2148343306.jpg"
          alt="Products Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Centered Product Name */}
        <div className="absolute inset-0 flex pt-10 items-center justify-center z-10">
          <h1 className="text-white text-3xl md:text-5xl font-medium tracking-wide">
            Products
          </h1>
        </div>
      </div>

      {categories.map((category) => (
        <ProductCategoryCarousel key={category.term_id} category={category} />
      ))}
    </div>
  );
}
