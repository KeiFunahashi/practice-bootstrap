<template lang="pug">
.new
  h1 新規作成
  .container
    Form(:formValue="formValue")
    button.product-submit(type="submit", @click="handleSubmit") 送信
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Form from '@/components/partials/Form/form.vue'

@Component({
  components: {
    Form,
  },
})
export default class Default extends Vue {
  // -----------Data-----------

  // フォームの値
  public formValue = {
    /** 商品名 */
    title: '',
    /** 値段 */
    price: '',
    /** 商品説明 */
    description: '',
  }

  // 商品作成メソッド
  async handleSubmit() {
    try {
      await this.$store.dispatch(
        'Product/create',
        {
          data: {
            id: null,
            title: this.formValue.title,
            price: Number(this.formValue.price),
            description: this.formValue.description,
            image: null,
          },
        },
        { root: true }
      )
      this.$router.push('/')
    } catch (e) {
      const errorRes = e.response
      if (errorRes.status === 400) {
        alert(errorRes.data.Error.Message)
      } else if (errorRes.status === 401) {
        alert('認証できませんでした。ログイン画面に進みます。')
        window.location.href = this.$C.ENDPOINT.API_ENDPOINT
      } else {
        this.$nuxt.error({ statusCode: 500, message: 'システムエラーです' })
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
