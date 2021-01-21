<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
      <router-link class="navbar-brand" to="/">B乎专栏</router-link>
      <ul v-if="!userInfo.isLogin" class="list-inline mb-0">
          <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">注册</router-link></li>
          <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登录</router-link></li>
      </ul>
       <ul v-else class="list-inline mb-0">
          <li class="list-inline-item"><button type="button" class="btn btn-link">欢迎你, {{ userInfo.name }}</button></li>
        <li class="list-inline-item">
          <dropdown :title="`你好 ${userInfo.name}`">
            <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
            <dropdown-item><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
            <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
          </dropdown>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// import dropdown from './DropDown.vue'
// import dropdownItem from './DropdownItem.vue'
export interface UserProps {
  id?: number;
  name?: string;
  isLogin: boolean;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    userInfo: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    // dropdown,
    // dropdownItem
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
