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
  components: {
    'asd': menu,
    'abc': todo
  }
}
</script>
<style lang='scss'>
@import '../style/layout.scss'
</style>
