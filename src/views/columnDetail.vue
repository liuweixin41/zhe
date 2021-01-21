<template>
  <div class="column-detail-page w-75 mx-auto">
      <div v-if="column" class="column-info row mb-4 border-bottom pb-4 align-items-center">
        <div class="col-3 text-center">
          <img :src="column.avatar" :alt="column.title" class="round-circle border">
        </div>
        <div class="col-9">
          <h4>{{ cloumn.title }}</h4>
          <p class="text-muted">{{ column.description }}</p>
        </div>
      </div>
      <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { listData } from '../listData'
import { myArticle } from '../myArticle'
import postList from '../components/postList.vue'
export default defineComponent({
  components: {
    postList
  },
  setup () {
    const route = useRoute()

    const currentId = +route.params.id
    const column = listData.find(c => c.id === currentId)
    const list = myArticle.filter(d => d.columnId === currentId)
    return {
      route,
      column,
      list
    }
  }
})
</script>

<style scoped>

</style>
