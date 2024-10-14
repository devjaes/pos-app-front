import {
  IProduct,
  IProductCreate,
  IProductUpdate,
} from '../entities/product-model'

export interface IProductRepository {
  getProducts(): Promise<IProduct[]>
  getProductById(id: string): Promise<IProduct | null>
  createProduct(product: IProductCreate): Promise<IProduct>
  updateProduct(product: IProductUpdate): Promise<IProduct>
  deleteProduct(id: string): Promise<boolean>
}
