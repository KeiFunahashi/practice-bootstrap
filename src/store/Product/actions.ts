const PRODUCTS_API_URL = 'http://localhost:8080/api/products/'
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
      const res = await this.$axios.$get(PRODUCTS_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      commit('index', res)
    } catch (e) {
      alert('失敗しました')
      console.log('失敗', e)
    }
  },

  /**
   * 商品追加
   */
  async add(this: any, { commit }: any, product: any) {
    console.log('-----------------actions(add)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$post(PRODUCTS_API_URL, product.data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('商品を追加しました')
    } catch (e) {
      alert('失敗しました')
      console.log('失敗', e)
    }
  },

  /**
   * 商品編集
   */
  async edit(this: any, { commit }: any, product: any) {
    console.log('-----------------actions(edit)-----------------')

    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$put(PRODUCTS_API_URL + product.data.id, product.data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('商品を編集しました')
    } catch (e) {
      alert('失敗しました')
      console.log('失敗', e)
    }
  },

  /**
   * 商品削除
   */
  async delete(this: any, { commit }: any, productId: number) {
    console.log('-----------------actions(delete)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$delete(PRODUCTS_API_URL + productId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('商品を削除しました')
    } catch (e) {
      alert('失敗しました')
      console.log('失敗', e)
    }
  },
}

export default actions
