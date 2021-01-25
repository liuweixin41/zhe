<template>
    <div class="dropdown" ref="dropdownUl">
      <a href="/" type="button" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggle">
        {{ title }}
      </a>
      <ul v-if="dropDownVisible" class="dropdown-menu" :style="{ display: 'block' }">
        <slot></slot>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutSide from '../hooks/useClickOutSide'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const dropDownVisible = ref(false)
    const toggle = () => {
      dropDownVisible.value = !dropDownVisible.value
    }
    const dropdownUl = ref<null | HTMLElement>(null)
    const isClickOutSide = useClickOutSide(dropdownUl)
    watch(isClickOutSide, () => {
      if (dropDownVisible.value && isClickOutSide.value) {
        dropDownVisible.value = false
      }
    })
    return {
      dropDownVisible,
      toggle,
      dropdownUl
    }
  }
})
</script>

<style scoped>

</style>
