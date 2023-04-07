<template>
  <div class="HomePage">
    <div class="main" ref="main">
      <div class="welcomeWord">
        <h1>HELLO!!</h1>
        <span>欢迎来到戴一凡的个人网站</span>
      </div>
    </div>
    <div class="help"></div>
    <div class="RightWay" :style="{width:widthcord + 'px'}">
      <div class="myPhoto" :style="{marginTop:margincord +'px'}">
        <img src="../assets/img/myMainPhoto1.png" alt="" >
      </div>
      <div class="Ivt" ref="Ivt">
        <div class="tbW">
          <div class="tbItem"><label>姓名Name:</label><span>戴一凡/taylor</span></div>
          <div class="tbItem"><label>性别Sex:</label><span>男/male</span></div>
          <div class="tbItem"><label>年龄Age:</label><span>21</span></div>
        </div>
        <div class="tbW">
          <div class="tbItem"><label>民族Nation:</label><span>汉</span></div>
          <div class="tbItem"><label>毕业学校School:</label><span>南京邮电大学继续教育学院/NUPT</span></div>
          <div class="tbItem"><label>专业Subject:</label><span>通信工程/Communication Project</span></div>
        </div>
        <div class="tbW">
          <div class="tbItem"><label>电话Phone:</label><span>+8615806106130</span></div>
          <div class="tbItem"><label>邮箱Email:</label><span>DrOzpin@163.com</span></div>
          <div class="tbItem"><label>健康Health:</label><span>良好/good</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

const widthcord = ref(430)//初始寬度
const margincord = ref(0)
const main = ref(null)
const Ivt = ref(null)
const twoPart = []

onMounted(()=>{
  window.addEventListener("scroll", scrollTop, true)
  twoPart[0]=main.value.offsetTop
  twoPart[1]=Ivt.value.offsetTop
})
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop
  if(scroll<window.innerHeight*1.2){
    widthcord.value = 430 + Math.floor(scroll)*1.3
    margincord.value = 0 + Math.floor(scroll)
  }
}
defineExpose({twoPart})
</script>

<style scoped lang="scss">
@import '../assets/color.scss';
.HomePage{
  @include wh(100%,220vh);
  @include flex(nowarp,none,);
  font-family: "Source Sans Pro", Arial, "黑体", sans-serif;
  position: relative;
  z-index: 1;
  .main{
    @include wh(auto,);
    @include flex(wrap,center,);
    flex: 1;
    z-index: 3;
    position: relative;
    .welcomeWord{
      @include flex(wrap);
      @include wh(100%,30%);
      margin-right: 10px;
      @include animationUp();
      h1{
        @include flex();
        font-size: 130px;
        width: 80%;
      }
      span{
        font-size: 40px;
        white-space: nowrap;
      }
    }
  }
  .help{
    width: auto;
    height: 100vh;
    display: none;
  }
  .RightWay{
    background-color: $theme-color;
    height: 100%;
    overflow: hidden;
    .myPhoto{
      flex: 1;
      @include flex(wrap,end,end);
      height: 100vh;
      img{
        width: 430px;
        height: 670px;
      }
    }
    .Ivt{
      @include wh(55%,35%);
      color: $theme-color;
      font-size: 20px;
      background-color: antiquewhite;
      position: absolute;
      bottom: 4%;
      left: 10%;
      border-radius: 20px;
      .tbW{
        @include flex(nowrap,baseline,space-around);
        @include wh(80%,15%);
        margin: 0 auto;
        padding-top: 70px;
        .tbItem{
          width: 25%;
          overflow-wrap: break-all;
          white-space: pre-wrap;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box; /* autoprefixer: off */
          -webkit-box-orient: vertical; /* autoprefixer: on */
          -webkit-line-clamp: 3;
          label{
            width: 100%;
            border-bottom: 3px solid $theme-color;
            display: inline-block;
            padding-bottom: 3px;
            margin-bottom: 5px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>