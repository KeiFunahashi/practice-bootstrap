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
   * 商品編集
   */
  edit: (state, product: Product) => {
    console.log('-----------------mutations(edit)-----------------')
    console.log('商品情報', product)
    state.products.splice(product.id - 1, 1, product)
    console.log('現在のstate', state)
    alert('商品が編集されました')
  },

  /**
   * 商品削除
   */
  delete: (state, productId: number) => {
    console.log('-----------------mutations(delete)-----------------')
    console.log('商品ID', productId)
    state.products.splice(productId - 1, 1)
    console.log('現在のstate', state)
    alert('商品が削除されました')
  },
}

export default mutations
