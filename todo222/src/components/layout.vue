<template>
    <section class="container">
        <section class="menu">
            <asd></asd>
        </section>
        <section class="todos">
            <abc v-on:testa='testb'></abc>
        </section>
    </section>
</template>
<script>
import menu from './menu.vue'
import todo from './todo.vue'
export default {
  data () {
    return {
      obj: null
    }
  },
  components: {
    'asd': menu,
    'abc': todo
  },
  methods: {
    testb (msg) {
      console.log(msg)
    }
  }
}
</script>
<style lang='scss'>
@import '../style/layout.scss'
</style>
