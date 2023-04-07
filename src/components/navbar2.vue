<template>
    <div class="PageTop2">
      <div class="myName">ozpin</div>
      <div class="nav">
        <ul>
          <li class=""><span>主页<div></div></span></li>
          <li><span>个人信息<div></div></span></li>
          <li><span>教育经历<div></div></span></li>
          <li><span>工作经历<div></div></span></li>
          <li><span>荣誉陈列<div></div></span></li>
        </ul>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import '../assets/color.scss';
  .PageTop2{
    @include wh(100%,0);
    @include flex(nowrap,center,space-around);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
    font-size: 20px;
    background-color: $font-color;
    transition:all .2s ease-out;
    .myName{
      font-size: 40px;
      @include fl();
      color: $theme-color;
    }
    .nav{
      border-radius: 5px;
      // box-shadow: 0px 0px 15px 2px #F5F5F5;
      ul{
        @include flex(nowrap);
        @include rl();
        li{
          width: 100px;
          cursor: pointer;
          padding: 5px 5px;
          color: $active-color;
          span{
            display: inline-block;
            div{
              height: 2px;
              width: 0;
              background-color: $theme-color;
            }
          }
        }
        .active{
          color:$theme-color;
          transition: 1s;
          div{
            width: 100%;
            transition: 1s;
          }
        }
        li:hover{
          @extend .active;
        }
      }
    }
  }
</style>