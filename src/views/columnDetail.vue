<template>
  <div class="column-detail-page w-75 mx-auto">
      <div v-if="column" class="column-info row mb-4 border-bottom pb-4 align-items-center">
        <div class="col-3 text-center">
          <img :src="column.avatar" :alt="column.title" class="round-circle border avatar">
        </div>
        <div class="col-9">
          <h4>{{ column.title }}</h4>
          <p class="text-muted">{{ column.description }}</p>
        </div>
      </div>
      <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { IGlobalStore } from '../store/index'
import postList from '../components/postList.vue'
export default defineComponent({
  components: {
    postList
  },
  setup () {
    const route = useRoute()
    const store = useStore<IGlobalStore>()
    const currentId = +route.params.id
    const column = computed(() => {
      return store.getters.getColumnByid(currentId)
    })
    const list = computed(() => {
      return store.getters.getArticlesById(currentId)
    })
    return {
      route,
      column,
      list
    }
  }
})
</script>

<style scoped lang="less">
.avatar {
  width: 100px;
  height: 100px
}
</style>
