import { GetterTree } from 'vuex'
import { ProductState, RootState } from '@/store/types'

/**
 * getters
 */
const getters: GetterTree<ProductState, RootState> = {
  searchProducts: (state: ProductState) => (searchWord: any) => {
    return state.products
      .filter((product) => product.title.includes(searchWord))
      .reverse()
  },
  productsLength: (state: ProductState) => {
    return state.products.length
  },
  productDetail: (state: any) => {
    console.log('-----------------getters(productDetail)-----------------')
    console.log(state)

    return state.productDetail
  },
}

export default getters
