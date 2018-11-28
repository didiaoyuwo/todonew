<template>
    <section class="container">
        <section class="menu">
            <asd></asd>
        </section>
        <section class="todos">
            <router-view></router-view>
        </section>
    </section>
</template>
<script>
import menu from './menu.vue'
export default {
  data () {
    return {}
  },
  components: {
    'asd': menu
  },
  methods: {}
}
</script>
<style lang='scss'>
@import '../style/layout.scss'
</style>
