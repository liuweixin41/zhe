<template>
    <div class="home-page">
      <section class="py-5 text-center container">
          <div class="row py-lg-5">
              <!-- .mx-auto实现块居中 -->
              <div class="col-lg-6 col-md-8 mx-auto">
                 <img src="../assets/logo.png"/>
                 <h2 class="font-weight-light">随心写作，自由表达</h2>
                 <p>
                    <a href="#" class="btn btn-primary my-2">开始写文章</a>
                 </p>
              </div>
          </div>
      </section>
      <h4 class="font-weight-bold text-center">发现精彩</h4>
      <column-list :lists="list"></column-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { listData } from '../listData'
import columnList from '../components/ColumnLists.vue'
export default defineComponent({
  name: 'home',
  components: {
    columnList
  },
  setup () {
    return {
      list: listData
    }
  }
})
</script>
