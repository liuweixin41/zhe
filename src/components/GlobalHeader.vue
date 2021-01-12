<template>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">B乎专栏</a>
      <ul class="list-inline mb-0" v-if="!userInfo.isLogin">
          <li class="list-inline-item"><a href="#" class="btn btn-primary my-2">注册</a></li>
          <li class="list-inline-item"><a href="#" class="btn btn-info my-2">登录</a></li>
      </ul>
       <ul class="list-inline mb-0" v-else>
          <!-- <li class="list-inline-item"><button type="button" class="btn btn-link">欢迎你, {{ userInfo.name }}</button></li> -->
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
import dropdown from './DropDown.vue'
import dropdownItem from './DropdownItem.vue'
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
    dropdown,
    dropdownItem
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
