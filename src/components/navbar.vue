<template>
    <div class="PageTop" ref="PageTop">
      <div class="myName">ozpin</div>
      <div class="nav">
        <ul>
          <li :class='{active:change == index}' v-for="(item , index) in navBtnArr" :key="index" :ref="setRef"><span>{{item}}</span></li>
        </ul>
      </div>
    </div>
</template>

<script setup>
import { ref,onMounted,toRefs } from 'vue';

const change = ref(0)
const navBtnArr= ref(['主页','个人信息','教育经历','工作经历','荣誉陈列'])
const btn = ref([])
const setRef=(el)=>{
  btn.value.push(el)
}
const props =defineProps({
  getOffset:[]
})
onMounted(()=>{
  window.addEventListener("scroll", scrollTop, true)
  console.log(props.getOffset)
  for (let key of btn.value) {

  }
})
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop
  change.value = 0
  if(scroll>=window.innerHeight*0.8){
    change.value = 1
  }
}
</script>

<style lang="scss">
  .PageTop{
    @include wh(80%,auto);
    @include flex(nowrap,center,space-between);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 20px;
    padding: 40px 10%;
    .myName{
      font-size: 40px;
      @include fl();
    }
    .nav{
      background-color: rgba(255, 255, 255, .2);
      border-radius: 5px;
      // box-shadow: 0px 0px 15px 2px #F5F5F5;
      ul{
        @include flex(nowrap);
        @include rl();
        li{
          width: 100px;
          cursor: pointer;
          padding: 5px 5px;
          span{
            display: inline-block;
            background: linear-gradient(to right,#505668,#505668) no-repeat left bottom;
            background-size: 0 10%;
          }
        }
        .active{
          color:#505668;
          transition: 1s;
          span{
            background-size: 100% 10%;
            transition: 1s;
            color:#505668 !important;
          }
        }
        li:hover{
          @extend .active;
        }
      }
    }
  }
</style>