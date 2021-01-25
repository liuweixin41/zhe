<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag === 'input'"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateInput"
      v-bind="$attrs"
    >
    <textarea
      v-if="tag === 'textarea'"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateInput"
      v-bind="$attrs"
    >
    </textarea>
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue'
// 引入父组件中暴露出来的emitter
import { emitter } from './validateForm.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleProp[]
export type TagType = 'input' | 'textarea'

export default defineComponent({
  name: 'validateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  // 禁止组件的根元素继承attributes
  inheritAttrs: false,

  setup (props, conText) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateInput = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      conText.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allpass = props.rules.every(rule => {
          let pass = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              pass = (inputRef.val.trim() !== '')
              break
            case 'email':
              pass = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return pass
        })
        inputRef.error = !allpass
        return allpass
      }
      return true
    }

    const handleClearInput = () => {
      inputRef.val = ''
      inputRef.error = false
      inputRef.message = ''
    }
    emitter.on('clear-input-val', handleClearInput)

    onMounted(() => {
      // 组件创建时发送
      // emitter 从validateForm组件中引入
      emitter.emit('form-item-created', validateInput)
    })

    return {
      inputRef,
      validateInput,
      updateInput
    }
  }
})
</script>

<style lang="less" scoped>

</style>
