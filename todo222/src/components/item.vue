<template>
    <ul class="content-items">
        <li class="content-item" v-for='(item,index) in items' :key='index'>
            <input type="checkbox">{{item.content}}
            <img class="icon-delete" src='../assets/imgs/delete.png' v-if='item.isChecked'>
        </li>
    </ul>
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/item.scss';
</style>
