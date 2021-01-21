<template lang="pug">
.index
  h1 商品一覧
  .container
    .searchForm
      .productName
        input(v-model="title", type="text", placeholder="商品名",required)
    .createProduct
      nuxt-link(to="/new").createProductBtn +
    .searchResults
      .searchResult(v-for="product in searchProducts")
        nuxt-link(:to="`/detail/${product.id}`")
          .productImage
            img(:src="product.image" height="462" width="519")
          .productName {{product.title}}
          .productPrice ￥{{product.price}}-
          .productDescription {{product.description}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  public title: string = ''

  get searchProducts() {
    return this.$store.getters['Product/searchProducts'](this.title)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.createProduct {
  display: flex;
  justify-content: flex-end;
  margin-right: 58px;
  .createProductBtn {
    width: fit-content;
    font-weight: bold;
    font-size: 50px;
    text-decoration: black;
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
  }
}
.searchResults {
  margin: 50px 0;
  a {
    text-decoration: none;
  }
  .productImage img {
    object-fit: contain;
  }
}
</style>
