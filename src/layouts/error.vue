<template lang="pug">
.errorWrap
  ErrorPage(
    :title="errorTitle"
    :message="errorMessage"
  )
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ErrorPage from '@/components/partials/Error.vue'

@Component({
  components: {
    ErrorPage,
  },
})
export default class Error extends Vue {
  @Prop({ type: Object, required: true })
  public error: any

  public errorTitle!: string
  public errorMessage!: string

  created() {
    this.errorTitle = this.error.statusCode
    this.errorMessage = this.error.message
  }
}
</script>
