<template>
    <div class="lists-show">
        <div class="nav-group">
            <div class="nav-item">
                <h1 class="title-group">
                    <div class="title-container">
                        <span class="title-wrapper" @dblclick='changeTitle' v-if='item.titleChange'>{{item.title}}</span>
                        <input type="text" name="" id="" v-if='!item.titleChange' v-model='item.title' @keyup.enter='item.titleChange = true' @blur="item.titleChange = true" v-focus>
                        <span class="count-list">{{item.count}}</span>
                    </div>
                    <div class="icons-container">
                        <img src="../assets/imgs/lock.png" alt="" class="icon-lock" v-if='item.islock'>
                        <img src="../assets/imgs/delete.png" alt="" class="icon-delete" v-if='item.isdelete'>
                    </div>
                </h1>
                <div class="add-content">
                    <label for='input' class="input-label">
                        <img src='../assets/imgs/add.png' alt="" class="icon-add" ref='addIcon'>
                        <input type="text" placeholder="请输入..." name='input' class='text-input' v-model='item.content' @focsu='changeImg' @blur='recoverImg' @keyup.enter='submit(item.content)'>
                    </label>
                </div>
            </div>
            <div class="list-content">
                <qwe></qwe>
            </div>
        </div>
    </div>
</template>
<script>
import Item from '@/components/item.vue'
export default {
  data () {
    return {
      item: {
        title: '123123',
        islock: true,
        isdelete: true,
        count: 1,
        titleChange: true,
        content: ''
      }
    }
  },
  components: {
    'qwe': Item
  },
  methods: {
    changeTitle () {
    //   alert(1)
      this.item.titleChange = !this.item.titleChange
    },
    changeImg () {
      this.$refs.addIcon[0].src = '../assets/imgs/addcolor.png'
    },
    recoverImg () {
      this.$refs.addIcon[0].src = '../assets/imgs/add.png'
    },
    submit (val) {
    //   alert(1)
      let data = {
        content: val,
        isChecked: false
      }
      if (data.content !== '') {
        this.$emit('testa', data)
      }
      this.item.content = ''
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/todo.scss';
</style>
