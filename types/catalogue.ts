export interface ProductSize {
  id: number;
  label: string;
  stock: number;
}

export interface Product {
  id: number;
  title: string;
  collection: string;
  image: string;
  price: number;
  isNew: boolean;
  sizes: ProductSize[];
}
