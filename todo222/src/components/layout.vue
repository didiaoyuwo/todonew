<template>
    <section class="container">
        <section class="menu">
            <asd></asd>
        </section>
        <section class="todos">
            <abc></abc>
        </section>
    </section>
</template>
<script>
import menu from './menu.vue'
import todo from './todo.vue'
export default {
  data () {
    return {}
  },
  components: {
    'asd': menu,
    'abc': todo
  },
  methods: {}
}
</script>
<style lang='scss'>
@import '../style/layout.scss'
</style>
