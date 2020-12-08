<template>
  <div class="container">
    <global-header :user-info="userInfo" class="mb-2"/>
    <column-lists :lists="lists"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnLists, { ColumnProps } from './components/ColumnLists.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const userInfo: UserProps = {
  id: 1,
  name: '小貂蝉',
  isLogin: true
}
const listdata: ColumnProps[] = [
  {
    id: 1,
    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635022258,84940537&fm=26&gp=0.jpg',
    title: 'test1专栏',
    description: '这里是test1的专栏文章'
  },
  {
    id: 2,
    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3795297958,1946891908&fm=26&gp=0.jpg',
    title: 'test2专栏',
    description: '这里是test2的专栏文章'
  },
  {
    id: 3,
    avatar: undefined,
    title: 'test3专栏',
    description: '这里是test3的专栏文章'
  },
  {
    id: 4,
    avatar: undefined,
    title: 'test4专栏',
    description: '这里是test4的专栏文章'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnLists,
    GlobalHeader
  },
  setup () {
    return {
      lists: listdata,
      userInfo
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
