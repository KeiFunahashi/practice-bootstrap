<template>
  <div>
    <label for="example-input">Choose a date</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
        @blur="toHyphen"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          button-only
          right
          locale="ja"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
    <p class="mb-1">Value: '{{ value }}'</p>
    <p class="mb-1">Selected: '{{ selected }}'</p>
    <p>Formatted: '{{ formatted }}'</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  // -----------Data-----------
  public value: string = ''
  public selected: string = ''
  public formatted: string = ''

  public toHyphen() {
    this.value = this.value.replace(/[^0-9]/g, '')
    if (new RegExp(/^[0-9]{8}$/).test(this.value)) {
      const str = this.value.trim()
      const y = str.substr(0, 4)
      const m = str.substr(4, 2)
      const d = str.substr(6, 2)
      this.value = y + '-' + m + '-' + d
    }
  }

  public onContext(ctx: any) {
    this.selected = ctx.selectedYMD
    this.formatted = ctx.selectedFormatted
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
