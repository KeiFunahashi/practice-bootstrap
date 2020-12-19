import { GetterTree } from 'vuex'
import { ProductState, RootState } from '@/store/types'

/**
 * getters
 */
const getters: GetterTree<ProductState, RootState> = {
  products: (state: ProductState) => {
    return state.products
  },
}

export default getters
