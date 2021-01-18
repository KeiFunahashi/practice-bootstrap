<template lang="pug">
.productDetail
  .productImage
    img(v-if="product.imagePath" :src="`${apiUrl}${product.imagePath}`" height="462" width="519")
    img(v-else :src="noImage" height="462" width="519")
  .productName {{product.title}}
  .productPrice ￥{{product.price}}-
  .productDescription {{product.description}}
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  // Props
  /**
   * 商品情報
   */
  @Prop({ required: true })
  public product: string | undefined

  // -----------Data-----------
  /** apiのURL(画像表示に使用) */
  public apiUrl: string = this.$C.ENDPOINT.PRODUCTS_API_URL

  /** noImage */
  public noImage: string =
    'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png'
}
</script>
<style>
.appName a {
  text-decoration: none;
}
.header {
  background-color: rgba(167, 167, 167, 0.16);
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
}
.content {
  text-align: center;
}
.productDetail {
  line-height: 20px;
}
span {
  padding: 0 20px;
}
</style>
