/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * actions
 */
const actions = {
  /**
   * 商品一覧取得
   */
  async index(this: any, { commit }: any): Promise<void> {
    console.log('-----------------actions(index)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      const res = await this.$axios.$get(this.$C.ENDPOINT.PRODUCTS_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      commit('index', res)
    } catch (e) {
      if (!e) {
        return
      }
      throw e
    }
  },
  /**
   * 商品詳細取得
   */
  async detail(this: any, { commit }: any, payload: any): Promise<void> {
    const { productId } = payload
    console.log('payload', payload)
    console.log('-----------------actions(detail)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      const productDetail = await this.$axios.$get(
        this.$C.ENDPOINT.PRODUCTS_API_URL + productId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      commit('detail', productDetail)
    } catch (e) {
      if (!e) {
        return
      }
      throw e
    }
  },

  /**
   * 商品追加
   */
  async create(this: any, { commit }: any, payload: any): Promise<void> {
    const { data } = payload
    console.log('-----------------actions(create)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$post(this.$C.ENDPOINT.PRODUCTS_API_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('商品を追加しました')
    } catch (e) {
      if (!e) {
        return
      }
      throw e
    }
  },

  /**
   * 商品編集
   */
  async edit(this: any, { commit }: any, payload: any): Promise<void> {
    const { productId, data, imageData } = payload

    console.log('-----------------actions(edit)-----------------')

    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$put(
        this.$C.ENDPOINT.PRODUCTS_API_URL + productId,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (imageData.get('productImage')) {
        // 画像が追加される場合
        await this.$axios.$patch(
          this.$C.ENDPOINT.PRODUCTS_API_URL + productId + '/images',
          imageData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }
      alert('商品を編集しました')
    } catch (e) {
      if (!e) {
        return
      }
      throw e
    }
  },

  /**
   * 商品削除
   */
  async delete(this: any, { commit }: any, payload: any): Promise<void> {
    const { productId } = payload
    console.log('-----------------actions(delete)-----------------')
    try {
      const token = this.$cookies.get('ApiToken')
      await this.$axios.$delete(this.$C.ENDPOINT.PRODUCTS_API_URL + productId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('商品を削除しました')
    } catch (e) {
      if (!e) {
        return
      }
      throw e
    }
  },
}

export default actions
