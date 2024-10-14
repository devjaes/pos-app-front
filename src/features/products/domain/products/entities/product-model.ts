export interface IProduct {
  id: number
  name: string
  mainCode: string
  auxCode: string
  description: string
  category: string
  stock: number
  unitPrice: number
  ivaVariable: string
  imageUrl: string
  ivaType: string
  iceType: string
  irbpType: string
}

export interface IProductCreate
  extends Omit<IProduct, 'id' | 'imageUrl' | 'auxCode' | 'ivaVariable'> {
  auxCode: string | null
  ivaVariable: string | null
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IProductUpdate
  extends Partial<Omit<IProductCreate, 'imageUrl'>> {}
