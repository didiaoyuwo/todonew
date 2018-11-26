<template>
    <div class="list-todos">
        <div class="list-todo" v-for='(item,index) in items' :key='index'>
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
export default {
  data () {
    return {
      items: [
        {
          title: '星期一', count: 1, islock: true
        },
        {
          title: '星期二', count: 2, islock: true
        },
        {
          title: '星期三', count: 3, islock: true
        }
      ]
    }
  },
  methods: {
    add () {
      // alert(1)
      this.items.push(
        {
          title: 'newList',
          count: 0,
          islock: false
        }
      )
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/menu.scss';
</style>
