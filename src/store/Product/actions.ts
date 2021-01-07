const GET_PRODUCTS_URL = 'http://localhost:8080/api/products'
/**
 * actions
 */
const actions = {
  /**
   * 商品取得
   */
  async index(this: any, { commit }: any) {
    console.log('-----------------actions(index)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      const res = await this.$axios.$get(GET_PRODUCTS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      commit('index', res)
    } catch (e) {
      alert('認証できませんでした')
      console.log('失敗', e)
    }
  },

  /**
   * 商品追加
   */
  add({ commit }: any, product: any) {
    console.log('-----------------actions(add)-----------------')
    commit('add', product.data)
  },

  /**
   * 商品編集
   */
  edit({ commit }: any, product: any) {
    console.log('-----------------actions(edit)-----------------')
    commit('edit', product.data)
  },

  /**
   * 商品削除
   */
  delete({ commit }: any, productId: number) {
    console.log('-----------------actions(delete)-----------------')
    commit('delete', productId)
  },
}

export default actions
