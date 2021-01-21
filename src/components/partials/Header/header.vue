<template lang="pug">
.header
  .appName
    nuxt-link(to="/")
      h1 商品登録
  .content
    nuxt-link(to="/")
      span 商品一覧
    nuxt-link(to="/new")
      span 新規作成
  .user ユーザー情報
</template>
<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class header extends Vue {}
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
span {
  padding: 0 20px;
}
</style>
