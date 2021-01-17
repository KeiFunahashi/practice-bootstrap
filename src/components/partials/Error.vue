<template lang="pug">
.error
  .title {{title}}
  .message {{message}}
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({ type: String, required: true })
  public title!: string

  @Prop({ type: String, required: true })
  public message!: string
}
</script>
