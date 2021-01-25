<template>
    <div class="login-page">
      <!-- @form-submit 接收子组件发过来的讯息。并调用onFormSubmit -->
      <validate-form @form-submit="onFormSubmit">
        <div class="mb-3 input-item">
            <label class="form-label">邮箱地址:</label>
            <validate-input
              :rules="emailRules"
              v-model="emailVal"
              type="text"
              placeholder="请输入邮箱"
            />
        </div>
        <div class="mb-3 input-item">
            <label class="form-label">密码:</label>
            <validate-input
              type="password"
              :rules="passwordRules"
              v-model="passwordVal"
              placeholder="请输入密码"
            />
        </div>
        <!-- <template #submit>
            <span class="btn btn-danger">Submit</span>
        </template> -->
      </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import validateForm, { emitter } from '../components/validateForm.vue'
import validateInput, { RulesProp } from '../components/validateInput.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'login',
  components: {
    validateInput,
    validateForm
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    const emailVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '电子邮箱地址不符' }
    ]

    const passWordVal = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]

    const onFormSubmit = (result: boolean) => {
      if (result) {
        // 发个消息到validateForm， 调用emitter.emit('clear-input-val', true)
        emitter.emit('form-item-submited', true)
        store.commit('loginByUserName')
        router.push({
          name: 'column',
          params: {
            id: 1
          }
        })
      }
    }

    return {
      emailVal,
      emailRules,
      passWordVal,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>
