<template lang="pug">
.new
  h1 商品編集
  .container
    form
      .productName
        label 商品：
          input(v-model="title", type="text", placeholder=`${title}`,required)
      .productPrice
        label 値段：
          input(v-model="price", type="text", placeholder=`${price}`, required)
      .productDescription
        label 説明：
          input(v-model="description", type="text", placeholder=`${description}`, maxLength="500", required)
      .productImage
        label 画像：
          input(v-model="image", type="text", placeholder=`${image}`, required)
      nuxt-link(:to="`/detail/${productId}`")
        button.product-submit(type="submit", @click="handleSubmit") 送信
</template>

<script lang="ts">
import { Product } from '@/store/types'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  public product: Product = this.$store.getters['Product/productDetail'](
    Number(this.$route.params.id)
  )

  public productId: number = this.product.id
  public title: string = this.product.title
  public price: number = this.product.price
  public description: string = this.product.description
  public image: string = this.product.image

  mounted() {
    console.log(this.product.title)
  }

  async handleSubmit() {
    try {
      await this.$store.dispatch(
        'Product/edit',
        {
          data: {
            id: this.productId,
            title: this.title,
            price: Number(this.price),
            description: this.description,
            image: this.image,
          },
        },
        { root: true }
      )
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
  line-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
