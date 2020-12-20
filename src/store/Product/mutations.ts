import { MutationTree } from 'vuex'
import { ProductState, Product } from '@/store/types'

/**
 * mutations
 */
const mutations: MutationTree<ProductState> = {
  add: (state, product: Product) => {
    console.log('-----------------mutations-----------------')
    console.log('商品情報', product)
    state.products.push(product)
    console.log('現在のstate', state)
    alert('商品が追加されました')
  },
}

export default mutations
