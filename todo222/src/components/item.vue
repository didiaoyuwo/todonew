<template>
    <ul class="content-items">
        <li class="content-item" v-for='(item,index) in items' :key='index' :class="{'isActive':item.isChecked}">
            <input type="checkbox" v-model='item.isChecked'>{{item.content}}
            <img class="icon-delete" src='../assets/imgs/delete.png' v-if='item.isChecked' @click='deletData(item.id)'>
        </li>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      checkedNames: [],
      items: [
        {
          content: '111111',
          isChecked: false
        },
        {
          content: '222222',
          isChecked: false
        },
        {
          content: '333333',
          isChecked: false
        }
      ]
    }
  },
  methods: {
    deletData (id) {
      this.items.splice(this.items.findIndex(item => item.id === id), 1)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/item.scss';
</style>
