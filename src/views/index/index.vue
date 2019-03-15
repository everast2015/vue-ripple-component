<template>
  <div>
    <ripple-button :msg="msg" :size="normal"/>
    <ripple-button :msg="msg1" :size="large"/>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="第一章" name="first">第一章</el-tab-pane>
      <el-tab-pane label="第二章" name="second">第二章</el-tab-pane>
      <el-tab-pane label="第三章" name="third">第三章</el-tab-pane>
      <el-tab-pane label="第四章" name="fourth">第四章</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import RippleButton from "@/components/form/index.js";
export default {
  name: 'index',
  components: {
    RippleButton
  },
  data() {
    return {
      msg: "小号按钮",
      msg1: "大号配置按钮",
      normal: "normal",
      large: "large",
      activeName: "second" // 高亮选择哪个按钮
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>