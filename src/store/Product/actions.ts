import { ActionTree } from 'vuex'
import { ProductState, RootState } from '@/store/types'

/**
 * actions
 */
const actions: ActionTree<ProductState, RootState> = {
  add({ commit }, product: any) {
    console.log('-----------------actions-----------------')
    commit('add', product.data)
  },
}

export default actions
