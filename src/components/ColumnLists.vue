<template>
    <div class="row">
      <div v-for="item in columnLists" :key="item.id" class="col-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <img :src="item.avatar" :alt="item.description" class="rounded-circle border border-light w-25 h-25 my-3">
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-text">{{ item.description }}</p>
            <a href="#">进入专栏</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps {
  id: number;
  avatar?: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnLists',
  props: {
    lists: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnLists = computed(() => {
      return props.lists.map(column => {
        if (!column.avatar || column.avatar === '') {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      columnLists
    }
  }
})
</script>

<style scoped>

</style>
