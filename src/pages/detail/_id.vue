<template lang="pug">
.search
  h1 商品詳細
  .container
    .productDetail
      .productImage
        img(:src="product.image" height="462" width="519")
      .productName {{product.title}}
      .productPrice ￥{{product.price}}-
      .productDescription {{product.description}}
    nuxt-link(:to="`/edit/${this.$route.params.id}`")
      button 編集
    button(@click="handleDelete") 削除
</template>

<script lang="ts">
import { ProductState } from '@/store/types'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  public product: ProductState = this.$store.getters['Product/productDetail'](
    Number(this.$route.params.id)
  )

  async handleDelete() {
    if (confirm('削除しますか？')) {
      try {
        await this.$store.dispatch(
          'Product/delete',
          Number(this.$route.params.id),
          { root: true }
        )
      } catch (e) {
        console.log('登録失敗', e)
        alert('登録できませんでした')
      }
      this.$router.push('/')
    } else {
      // 何もしない
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
button {
  margin: 5px 10px;
}
.productImage img {
  object-fit: contain;
}
</style>
