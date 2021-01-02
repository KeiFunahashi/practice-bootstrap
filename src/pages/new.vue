<template lang="pug">
.new
  h1 新規作成
  .container
    form
      .productName
        label 商品：
          input(v-model="title", type="text", placeholder="商品名",required)
      .productPrice
        label 値段：
          input(v-model="price", type="text", placeholder="値段", required)
      .productDescription
        label 説明：
          input(v-model="description", type="text", placeholder="商品説明", maxLength="500", required)
      .productImage
        label 画像：
          input(v-model="image", type="text", placeholder="商品画像URL", required)
      nuxt-link(to="/")
        button.product-submit(type="submit", @click="handleSubmit") 送信
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  public title: string = ''
  public price: number | undefined
  public description: string = ''
  public image: string = ''
  public productsLength: number = this.$store.getters['Product/productsLength']

  async handleSubmit() {
    try {
      await this.$store.dispatch(
        'Product/add',
        {
          data: {
            id: this.productsLength + 1,
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
