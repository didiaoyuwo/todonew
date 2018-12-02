<template>
    <div class="list-todos">
        <div class="list-todo" v-for='(item,index) in items' :key='index' @click='goList(item.id)'>
            <img class="icon-lock" src='../../static/lock.png' v-if='item.locked'>
            <p class="title">{{item.title}}</p>
            <span class="count-list" v-if='item.count > 0'>{{item.count}}</span>
        </div>
        <a class="add" @click='addTodoList'>
            +新增
        </a>
        {{this.data}}
    </div>
</template>
<script>
import { addTodo } from '@/api/api'
export default {
  data () {
    return {
      items: [],
      todoID: '',
      todoNum: 0
    }
  },
  methods: {
    goList (id) {
      this.todoID = id
    },
    addTodoList () {
      addTodo()
      this.$nextTick(() => {
        console.log(this.data)
      })
    }
  },
  created () {
    this.$store.dispatch('getTodo').then(() => {
      this.$nextTick(() => {
        this.goList(this.data[0].id)
      })
    })
  },
  computed: {
    data () {
      // const number = this.$store.getters.getTodoList.length
      // if (this.$store.getters.getTodoList.length < this.todoNum) {
      //   this.goList(this.$store.getters.getTodoList[0].id)
      // }
      // // this.todoNum = number
      return this.$store.getters.getTodoList
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/menu.scss';
</style>
