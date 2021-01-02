import { ActionTree } from 'vuex'
import { ProductState, RootState } from '@/store/types'

/**
 * actions
 */
const actions: ActionTree<ProductState, RootState> = {
  add({ commit }, product: any) {
    console.log('-----------------actions(add)-----------------')
    commit('add', product.data)
  },
  edit({ commit }, product: any) {
    console.log('-----------------actions(edit)-----------------')
    commit('edit', product.data)
  },
  delete({ commit }, productId: number) {
    console.log('-----------------actions(delete)-----------------')
    commit('delete', productId)
  },
}

export default actions
