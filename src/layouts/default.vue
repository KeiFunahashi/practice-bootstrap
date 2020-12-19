<template lang="pug">
.app
    Header
    .main
     Nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Header from '@/components/partials/Header/header.vue'

@Component({
  components: {
    Header,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
