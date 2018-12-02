<template>
    <div class="list-todos">
        <div class="list-todo" v-for='(item,index) in items' :key='index' @click='goList(item.id)'>
            <img class="icon-lock" src='../../static/lock.png' v-if='item.locked'>
            <p class="title">{{item.title}}</p>
            <span class="count-list" v-if='item.count > 0'>{{item.count}}</span>
        </div>
        <a class="add" @click='add'>
            +新增
        </a>
        {{this.data}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      items: [],
      todoID: '',
      todoNum: 0
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
    goList (id) {
      this.todoID = id
    }
  },
  created () {
    this.$store.dispatch('getTodo').then()
  },
  computed: {
    data () {
      const number = this.$store.getters.getTodoList.length
      if (this.$store.getters.getTodoList.length < this.todoNum) {
        this.goList(this.$store.getters.getTodoList[0].id)
      }
      this.todoNum = number
      // return number
      return this.$store.getters.getTodoList
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/menu.scss';
</style>
