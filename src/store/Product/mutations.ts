import { MutationTree } from 'vuex'
import { ProductState, Product } from '@/store/types'

/**
 * mutations
 */
const mutations: MutationTree<ProductState> = {
  /**
   * 商品取得
   */
  index: (state, product: Product[]) => {
    console.log('-----------------mutations(index)-----------------')
    console.log('商品情報', product)
    console.log('現在のstate', state.products)
    state.products = product
    console.log('追加後のstate', state.products)
  },

  /**
   * 商品詳細
   */
  detail: (state, product: Product) => {
    console.log('-----------------mutations(detail)-----------------')
    console.log('商品情報', product)
    console.log('現在のstate', state)
    state.productDetail = product
    console.log('追加後のstate', state)
  },
}

export default mutations
