<template lang="pug">
form
  .productName
    label 商品：
      input(v-model="formValue.title", type="text",required)
  .productPrice
    label 値段：
      input(v-model="formValue.price", type="text", required)
  .productDescription
    label 説明：
      input(v-model="formValue.description", type="text", maxLength="500", required)
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  // Props
  /**
   * 商品情報
   */
  @Prop({ required: true })
  public formValue: any | undefined
}
</script>
<style lang="scss" scoped>
form {
  line-height: 60px;
  input {
    border: none;
    border-bottom: 1px solid #cccccc;
  }
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
