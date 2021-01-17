<template lang="pug">
.header
  .appName
    nuxt-link(to="/")
      h1 商品登録
  .user ユーザー情報
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {}
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
