<template lang="pug">
.index
  h1 商品一覧
  .container
    .searchForm
      .productName
        input(v-model="title", type="text", placeholder="商品名",required)
    .createProduct
      nuxt-link(to="/new").createProductBtn +
    .searchResults
      .searchResult(v-for="product in searchProducts")
        nuxt-link(:to="`/detail/${product.id}`")
          .productImage
            img(v-if="product.imagePath" :src="`${apiUrl}${product.imagePath}`" height="462" width="519")
            img(v-else :src="noImage" height="462" width="519")
          table
            tr
              td.productNameTitle 商品：
              td.productName {{product.title}}
            tr
              td.productPriceTitle 値段：
              td.productPrice ￥{{product.price}}-
            tr
              td.productDescriptionTitle 説明：
              td.productDescription {{product.description}}
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  // -----------Data-----------
  /** apiのURL(画像表示に使用) */
  public apiUrl: string = this.$C.ENDPOINT.PRODUCTS_API_URL

  /** noImage */
  public noImage: string =
    'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png'

  /** 検索ワード */
  public title: string = ''

  /** 商品情報 */
  public get searchProducts() {
    return this.$store.getters['Product/searchProducts'](this.title)
  }

  // -----------ライフサイクル-----------
  /** asyncDataフック */
  public async asyncData(context: Context) {
    // context
    const { app, store, error } = context
    // 商品情報取得
    try {
      await store.dispatch('Product/index', {
        root: true,
      })
    } catch (e) {
      const errorRes = e.response
      if (errorRes.status === 400) {
        alert(errorRes.data.Error.Message)
      } else if (errorRes.status === 401) {
        alert('認証できませんでした。ログイン画面に進みます。')
        window.location.href = app.$C.ENDPOINT.API_ENDPOINT
      } else {
        error({ statusCode: 500, message: 'システムエラーです' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.createProduct {
  display: flex;
  justify-content: flex-end;
  margin-right: 58px;
  .createProductBtn {
    width: fit-content;
    font-weight: bold;
    font-size: 50px;
    text-decoration: black;
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
  }
}

.searchResults {
  padding: 50px 500px;
}
.searchResult {
  padding: 20px;
  .productImage img {
    object-fit: contain;
    margin-top: 60px;
  }
  table {
    margin: 0 auto;
  }
}
.searchResult:hover {
  background-color: rgb(224, 224, 224);
}
</style>
