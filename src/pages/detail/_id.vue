<template lang="pug">
.search
  h1 商品詳細
  .container
    .productDetail
      img.productImage(:src="product.image")
      .productName {{product.name}}
      .productPrice ￥{{product.price}}-
      .productDescription {{product.description}}
</template>

<script lang="ts">
import { ProductState } from '@/store/types'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  product: ProductState = this.$store.getters['Product/productDetail'](
    Number(this.$route.params.id)
  )
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
