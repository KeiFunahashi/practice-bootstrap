<template lang="pug">
.search
  h1 商品詳細
  .container
    Detail(:product="product")
    nuxt-link(:to="`/edit/${this.$route.params.id}`").editBtn
      button 編集
    button(@click="handleDelete").deleteBtn 削除
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Detail from '@/components/partials/Product/detail.vue'
import { Context } from '@nuxt/types'

@Component({
  components: {
    Detail,
  },
})
export default class Default extends Vue {
  // ----------Data----------
  /** 商品情報 */
  public get product() {
    return this!.$store.getters['Product/productDetail']
  }

  // ----------メソッド----------
  /** 商品削除メソッド */
  public async handleDelete() {
    if (confirm('削除しますか？')) {
      try {
        await this.$store.dispatch(
          'Product/delete',
          {
            productId: Number(this.$route.params.id),
          },
          { root: true }
        )
        this.$router.push('/')
      } catch (e) {
        const errorRes = e.response
        if (errorRes.status === 400) {
          this.$nuxt.error({
            statusCode: 400,
            message: errorRes.data.Error.Message,
          })
        } else if (errorRes.status === 401) {
          alert('認証できませんでした。ログイン画面に進みます。')
          window.location.href = this.$C.ENDPOINT.API_ENDPOINT
        } else {
          this.$nuxt.error({ statusCode: 500, message: 'システムエラーです' })
        }
      }
    } else {
      // 何もしない
    }
  }

  // ----------ライフサイクル----------
  /** asyncData */
  public async asyncData(context: Context) {
    // context
    const { app, store, route, error } = context

    // 商品詳細取得
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
        window.location.href = app.$C.ENDPOINT.API_ENDPOINT
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
}
button {
  margin: 5px 10px;
}
.productImage img {
  object-fit: contain;
}
button {
  margin-top: 20px;
  padding: 7px 115px;
  border: none;
  font-size: 15px;
  font-weight: bold;
}
.editBtn {
  button {
    color: #3b3b3b;
  }
}
.deleteBtn {
  color: #fff;
  background-color: #ea352d;
}
</style>
