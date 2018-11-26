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
                        <img :src="item.addIcon" alt="" class="icon-add" ref='addIcon'>
                        <input type="text" placeholder="请输入..." name='input' class='text-input' v-model='item.content' @keyup.enter="item.content = ''" @focus="changeIcon" @blur="recoverIcon">
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
        content: '',
        addIcon: './src/assets/imgs/add.png'
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
    changeIcon () {
    //   console.log(this.$refs.addIcon)
      this.$refs.addIcon.src = './src/assets/imgs/addcolor.png'
    },
    recoverIcon () {
      this.$refs.addIcon.src = './src/assets/imgs/add.png'
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/todo.scss';
</style>
