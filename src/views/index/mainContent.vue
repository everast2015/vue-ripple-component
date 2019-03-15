<template>
  <div id="app">
    <el-radio v-model="radio" label="1">效果一</el-radio>
    <el-radio v-model="radio" label="2">效果二</el-radio>
    <el-radio v-model="radio" label="3">效果三</el-radio>
    <el-radio v-model="radio" label="4">效果四</el-radio>
    <left-menu></left-menu>
    <!-- 方法一、平移切换的效果 -->
    <transition name="transitionRouter" mode="out-in" v-if="radio == 1">
      <router-view></router-view>
    </transition>
    <!-- 方法二、使用animate跳转页面的动画效果 -->
    <transition
      mode="out-in"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
      v-if="radio == 2"
    >
      <router-view></router-view>
    </transition>
    <!-- 方法三、淡入淡出 -->
    <transition name="fade" mode="out-in" v-if="radio == 3">
      <router-view></router-view>
    </transition>
    <!-- 方法四 -->
    <transition name="slide-left" v-if="radio == 4">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import LeftMenu from "@/components/layout/index.js";
export default {
  name: "app",
  components: {
    LeftMenu
  },
  data() {
    return {
      radio: '1'
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
// 第一种方法样式
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.9s ease;
}

.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(100%, 0, 0);
}

// 第三种方法样式
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

// 方法四

.child-view {
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
}
</style>
