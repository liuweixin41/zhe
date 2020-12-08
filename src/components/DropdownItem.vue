<template>
    <div>
       <li
         class="dropdown-option"
         :class="{'isDisabled': disabled}"
       >
         <slot></slot>
       </li>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="less" scoped>
  .dropdown-option.isDisabled {
      color:  #6c757d;
      pointer-events: none;
      background: transparent;
  }
</style>
