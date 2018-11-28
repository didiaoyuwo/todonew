<template>
    <div class="list-todos">
        <div class="list-todo" v-for='(item,index) in items' :key='index' @click='jump(index)'>
            <img class="icon-lock" src='../assets/imgs/lock.png' v-if='item.islock'>
            <p class="title">{{item.title}}</p>
            <span class="count-list" v-if='item.count > 0'>{{item.count}}</span>
        </div>
        <a class="add" @click='add'>
            +新增
        </a>
    </div>
</template>
<script>
import { getTodo } from '@/api/api.js'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    add () {
      // alert(1)
      this.items.push(
        {
          title: 'newList',
          count: 0,
          islock: true
        }
      )
    },
    jump (index) {
      this.$router.push({name: 'todo', params: {id: index}})
    }
  },
  mounted () {
    getTodo().then(res => {
      this.items = res.data
    })
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/menu.scss';
</style>
