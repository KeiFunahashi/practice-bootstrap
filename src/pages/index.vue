<template lang="pug">
.index
  h1 商品一覧
  .container
    .searchForm
      .productName
        input(v-model="name", type="text", placeholder="商品名",required)
    .searchResult(v-for="product in searchProducts")
      img.productImage(:src="product.image")
      .productName {{product.name}}
      .productPrice ￥{{product.price}}-
      .productDescription {{product.description}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  public name: string = ''

  get searchProducts() {
    return this.$store.getters['Product/searchProducts'](this.name)
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
</style>
