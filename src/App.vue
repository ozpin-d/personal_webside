<template>
  <div class="app" ref="root">
    <Navbar :class="{hidden:homePageVisible == false}" :getOffset="offsets"/>
    <Navbar2 :class="{BarActive:homePageVisible == false}" />
    <HomePage ref="targetH"/>
    <Personal ref="targetP"/>
  </div>
</template>

<script setup>
import HomePage from './components/HomePage.vue'
import Navbar from './components/navbar.vue'
import Navbar2 from './components/navbar2.vue'
import Personal from './components/personcal_ivt.vue'
import { useIntersectionObserver } from '@vueuse/core'
import { ref,onMounted } from 'vue'
const root = ref(null)
const targetH = ref(null) 
const targetP = ref(null) 
const homePageVisible = ref(false) 
const personaleVisible = ref(false)
let offsets = []
onMounted(()=>{
  const res = JSON.parse(JSON.stringify(targetH.value))
  offsets=res.twoPart
})
useIntersectionObserver( 
  targetH, 
  ([{ isIntersecting }],observerElement) => { 
    homePageVisible.value = isIntersecting
  }, 
)
useIntersectionObserver( 
  targetP, 
  ([{ isIntersecting }],observerElement) => { 
    personaleVisible.value = isIntersecting
  }, 
)
</script>


<style lang="scss">
@import './assets/color.scss';
* {
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
  }

  li {
    list-style: none;
    text-align: center;
  }
}
html,
body,#app,.app {
  @include wh(100%,auto);
  background-color: #E2AB7F;
  font-family: "Source Sans Pro", Arial, "黑体", sans-serif;
  position: relative;
  color: $font-color;
}
.BarActive{
  height: 60px !important;
}
.hidden{
  display: none;
}
</style>
