<template>
    <label for='iitem' class="lebal" :class="{line:item.isChecked}">
      <input type="checkbox" name='iitem' class="item-content" v-model='item.isChecked' >{{item.content}}
      <img src="../assets/imgs/delete.png" alt="" class="icon-delete" v-if='item.isChecked'>
    </label>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style lang='scss' scoped>
@import '@/style/item.scss';
</style>
