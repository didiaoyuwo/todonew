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
  watch: {
    'todoId' (id) {
      this.$router.push({name: 'todo', params: { id: id }})
    }
  },
  methods: {
    goList (id) {
      this.todoID = id
      // console.log(this.todoID)
    },
    addTodoList () {
      // console.log(addTodo())
      addTodo().then((data) => {
        this.$store.dispatch('getTodo').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.goList(this.data[this.data.length - 1].id)
            }, 200)
          })
        })
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
