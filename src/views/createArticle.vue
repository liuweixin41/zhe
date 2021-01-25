<template>
    <div class="create-post-page">
        <h4>新建文章</h4>
        <validate-form @form-submit="onFormSubmit">
          <div class="mb-3">
            <label class="form-label">文章标题:</label>
            <validate-input
              :rules="titleRules"
              v-model="titleVal"
              placeholder="请输入文章标题"
              type="text"
            >
            </validate-input>
          </div>
          <div class="mb-3">
            <label class="form-label">文章详情:</label>
            <validate-input
              rows="10"
              tag="textarea"
              placeholder="请输入文章详情"
              :rules="contentRules"
              v-model="contentVal"
            >
            </validate-input>
          </div>
          <template #submit>
            <button class="btn btn-primary btn-large">发表文章</button>
          </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalStore, ArticleProps } from '../store/index'
import validateForm from '../components/validateForm.vue'
import validateInput, { RulesProp } from '../components/validateInput.vue'

export default defineComponent({
  components: {
    validateForm,
    validateInput
  },
  setup () {
    const router = useRouter()
    const store = useStore<GlobalStore>()

    // 标题
    const titleVal = ref('')
    const titleRules: RulesProp = [
      { type: 'required', message: '请输入文章标题' }
    ]

    // 正文
    const contentVal = ref('')
    const contentRules: RulesProp = [
      { type: 'required', message: '请输入文章内容' }
    ]

    const onFormSubmit = (result: boolean) => {
      if (result) {
        // ES6 解构
        const { columnId } = store.state.user
        if (columnId) {
          const newArticle: ArticleProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            // toLocaleString() 方法, 根据本地时间把 Date 对象转换为字符串
            createTime: new Date().toLocaleString()
          }
          store.commit('createArticle', newArticle) // 添加一条记录
          router.push({
            name: 'column',
            params: { id: columnId }
          })
        }
      }
    }
    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      onFormSubmit
    }
  }
})
</script>

<style scoped>

</style>
