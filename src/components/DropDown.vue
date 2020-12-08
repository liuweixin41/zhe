<template>
    <div class="dropdown" ref="dropdownUl">
       <a href="#" type="button" class="btn btn-link" @click.prevent="toggle">{{ title }}</a>
       <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="dropDownVisible">
          <slot></slot>
       </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
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
    const handler = (e: MouseEvent) => {
      console.log(e)
      if (dropdownUl.value) {
        // 取反，表示当前点击区域在dropdown组件之外。同时要满足dropdown组件已经打开。这时候去关闭drowdown
        if (!dropdownUl.value.contains(e.target as HTMLElement) && dropDownVisible.value) {
          dropDownVisible.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
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
