export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  regular_price: string;
  sale_price: string;
  stock: number;
  view_count: number;
  sold_count: number;
  status: number;
  category_id: number;
  images: Image[];
  created_at: string;
  updated_at: string;
}

export interface ProductListData {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}