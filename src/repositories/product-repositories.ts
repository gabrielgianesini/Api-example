export interface ProductCreateData{
  name: string;
  price: number;
}
export interface ProductChangeData{
  id: string;
  name: string;
  price: number;
}
export interface ProductConsultData{
  name: string;
}
export interface ProductDeleteData{
  id: string;
}
export interface Product{
  id: string;
  name: string;
  price: number;
}

export interface ProductRepository {
  create: (data: ProductCreateData) => Promise<Product>;
  change: (data: ProductChangeData) => Promise<void>;
  consult: (data: ProductConsultData) => Promise<Product[]>;
  delete: (data: ProductDeleteData) => Promise<void>;
}
