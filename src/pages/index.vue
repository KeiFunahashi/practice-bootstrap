<template lang="pug">
.index
  h1 商品一覧
  .container
    .searchForm
      .productName
        input(v-model="title", type="text", placeholder="商品名",required)
    .searchResults
      .searchResult(v-for="product in searchProducts")
        nuxt-link(:to="`/detail/${product.id}`")
          .productImage
            img(v-if="product.image" :src="product.image" height="462" width="519")
            img(v-else src="https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png" height="462" width="519")
          .productName {{product.title}}
          .productPrice ￥{{product.price}}-
          .productDescription {{product.description}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  // 検索ワード
  public title: string = ''

  // 商品情報
  get searchProducts() {
    return this.$store.getters['Product/searchProducts'](this.title)
  }

  // 商品取得メソッド
  public async fetchGetProducts() {
    try {
      await this.$store.dispatch('Product/index', {
        root: true,
      })
    } catch (e) {
      console.log('登録失敗', e)
      alert('登録できませんでした')
    }
  }

  /** ライフサイクル */
  public async fetch() {
    try {
      await this.fetchGetProducts()
    } catch (e) {
      console.log('登録失敗', e)
      alert('登録できませんでした')
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

.searchResults {
  margin: 50px 0;
  a {
    text-decoration: none;
  }
  .productImage img {
    object-fit: contain;
  }
}
</style>
