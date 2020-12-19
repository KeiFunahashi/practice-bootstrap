<template lang="pug">
.index
  h1 商品一覧
    .container(v-for="product in products")
      img.productImage(:src="product.image")
      .productName {{product.name}}
      .productPrice ￥{{product.price}}-
      .productDescription {{product.description}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { ProductState } from '@/store/types'

@Component({})
export default class Default extends Vue {
  public products: ProductState = this.$store.getters['Product/products']
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
