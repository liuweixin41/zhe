<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
        <slot name="submit">
            <button type="submit" class="btn btn-primary">提交</button>
        </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
// 引入mitt
import mitt from 'mitt'
// 创建
export const emitter = mitt()
// callback 的类型设置
type validateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    // eslint-disable-next-line prefer-const
    let funcArr: validateFunc[] = []
    // 先使用map循环，循环调用func（）方法，生成了一个装满boolean值的数组，之后再使用every（）循环去寻找是否有false的值
    /* const result = funcArr.map(func => func()).every(result => result)
      这里是之前犯的一个错误
       这段代码写在了submitForm事件的外部 导致点击提交时验证结果一直返回true
       查阅了相关资料，发现是因为按照执行顺序，循环的这句代码先走了，此时funcArr还是一个空数组，然后才是mitt.on监听加执行回调，将传过来的validateInput push进funcArr
       此时funcArr.map(func => func())执行后得到的是一个空数组。而对空数组执行every循环
       一直会返回true。导致的问题就是验证表单时总也返回true，这就不合理
    */
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    // 设置mitt监听的回调
    const callback = (func?: validateFunc) => {
      if (func) {
        funcArr.push(func)
      }
    }
    const callclear = (res?: boolean) => {
      if (res) {
        emitter.emit('clear-input-val', true)
      }
    }
    // 创建mitt监听
    emitter.on('form-item-created', callback)
    emitter.on('form-item-submited', callclear)

    onUnmounted(() => {
    // 销毁mitt监听
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped lang="less">
</style>
