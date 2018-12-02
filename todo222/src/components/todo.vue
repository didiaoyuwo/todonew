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
                        <img :src='url' alt="" class="icon-add" ref='addIcon'>
                        <input type="text" placeholder="请输入..." name='input' class='text-input' v-model='content' @focus='changeImg()' @blur='recoverImg()' @keyup.enter='submit(content)'>
                    </label>
                </div>
            </div>
            <div class="list-content">
                <ul class="list-ul">
                    <li v-for='(iitem,index) in iitems' :key='index' class="list-li">
                        <qwe :item='iitem'></qwe>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Item from '@/components/item.vue'
import add from '@/assets/imgs/add.png'
import addcolor from '@/assets/imgs/addcolor.png'
export default {
  data () {
    return {
      url: add,
      obj: null,
      content: '',
      item: {
        title: '123123',
        islock: true,
        isdelete: true,
        count: 1,
        titleChange: true
      },
      iitems: [
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
  components: {
    'qwe': Item
  },
  methods: {
    changeTitle () {
    //   alert(1)
      this.item.titleChange = !this.item.titleChange
    },
    changeImg () {
      // console.log(this.$refs.addIcon)
      this.url = addcolor
    },
    recoverImg () {
      this.url = add
    },
    submit (val) {
    //   alert(1)
      if (val !== '') {
        this.iitems.push({
          content: val, isChecked: false
        })
      }
      this.content = ''
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/style/todo.scss';
</style>
