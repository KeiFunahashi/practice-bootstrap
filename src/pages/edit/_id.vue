<template lang="pug">
.new
  h1 商品編集
  .container
    Form(:formValue="formValue")
    button.product-submit(type="submit", @click="handleSubmit") 送信
</template>

<script lang="ts">
import { Product } from '@/store/types'
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import Form from '@/components/partials/Form/form.vue'

@Component({
  components: {
    Form,
  },
})
export default class Default extends Vue {
  // Data
  /** 商品詳細情報 */
  public get product(): Product {
    return this!.$store.getters['Product/productDetail']
  }

  /** 商品ID */
  public productId: number = this.product.id

  // フォームの値
  public formValue = {
    /** 商品名 */
    title: this.product.title,
    /** 値段 */
    price: this.product.price,
    /** 商品説明 */
    description: this.product.description,
  }

  // メソッド
  /** 商品編集メソッド */
  async handleSubmit() {
    try {
      await this!.$store.dispatch(
        'Product/edit',
        {
          productId: this.productId,
          data: {
            id: this.productId,
            title: this.formValue.title,
            price: Number(this.formValue.price),
            description: this.formValue.description,
            image: null,
          },
        },
        { root: true }
      )
      this.$router.push('/detail/' + this.productId)
    } catch (e) {
      const errorRes = e.response
      if (errorRes.status === 400) {
        alert(errorRes.data.Error.Message)
      } else if (errorRes.status === 401) {
        alert('認証できませんでした。ログイン画面に進みます。')
        window.location.href = this.$store.$C.ENDPOINT.API_ENDPOINT
      } else {
        this.$nuxt.error({ statusCode: 500, message: 'システムエラーです' })
      }
    }
  }

  // ライフサイクル
  /** asyncDataフック */
  public async asyncData(context: Context) {
    // context
    const { store, route, error } = context

    // 商品詳細情報をstoreに保存
    try {
      await store.dispatch(
        'Product/detail',
        { productId: Number(route.params.id) },
        {
          root: true,
        }
      )
    } catch (e) {
      const errorRes = e.response
      if (errorRes.status === 400) {
        error({ statusCode: 400, message: errorRes.data.Error.Message })
      } else if (errorRes.status === 401) {
        alert('認証できませんでした。ログイン画面に進みます。')
        window.location.href = context.$C.ENDPOINT.API_ENDPOINT
      } else {
        error({ statusCode: 500, message: 'システムエラーです' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  button {
    padding: 7px 115px;
    border: none;
    background-color: #ea352d;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
