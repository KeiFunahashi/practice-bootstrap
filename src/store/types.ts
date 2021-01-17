export interface RootState {
  version: string
}

export interface ProductState {
  products: Product[]
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  image: any
}
