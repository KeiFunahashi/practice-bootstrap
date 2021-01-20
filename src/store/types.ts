export interface RootState {
  version: string
}

export interface ProductState {
  productDetail: Product
  products: Product[]
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  imagePath: any
}

declare module 'vue/types/vue' {
  interface Vue {
    $C: any
  }
}
