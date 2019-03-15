<template>
  <button :class="[rippleBtn, 'ripple-btn' + size]">
    {{ msg }}
    <canvas class="ripple-ripple" @click="ripple"></canvas>
    <slot></slot>
  </button>
</template>

<script>
import { getStyle, getStyleNumber } from "../utils";

export default {
  name: "RippleButton",
  props: {
    speed: {
      type: Number,
      default: 3
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    msg: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      color: "",
      radius: 0,
      oCanvas: null,
      context: null,
      initialized: false,
      speedOpacity: 0,
      timer: null,
      origin: {},
      rippleBtn: "ripple-btn"
    };
  },
  methods: {
    init(el) {
      const oBtn = el.parentElement;
      this.color = getStyle(el.parentElement, "color");
      const w = getStyleNumber(oBtn, "width");
      // 透明度的速度
      this.speedOpacity = (this.speed / w) * this.opacity;
      // canvas 宽和高
      el.width = w;
      el.height = getStyleNumber(oBtn, "height");
      this.context = el.getContext("2d");
    },
    ripple(event) {
      // 清除上次没有执行的动画
      if (this.timer) {
        window.cancelAnimationFrame(this.timer);
      }
      this.el = event.target;
      // 执行初始化
      if (!this.initialized) {
        this.initialized = true;
        this.init(this.el);
      }
      this.radius = 0;
      // 点击坐标原点
      this.origin.x = event.offsetX;
      this.origin.y = event.offsetY;
      this.context.clearRect(0, 0, this.el.width, this.el.height);
      this.el.style.opacity = this.opacity;
      this.draw();
    },
    draw() {
      this.context.beginPath();
      // 绘制波纹
      this.context.arc(
        this.origin.x,
        this.origin.y,
        this.radius,
        0,
        2 * Math.PI,
        false
      );
      this.context.fillStyle = this.color;
      this.context.fill();
      // 定义下次的绘制半径和透明度
      this.radius += this.speed;
      this.el.style.opacity -= this.speedOpacity;
      // 通过判断半径小于元素宽度或者还有透明度，不断绘制圆形
      if (this.radius < this.el.width || this.el.style.opacity > 0) {
        this.timer = window.requestAnimationFrame(this.draw);
      } else {
        // 清除画布
        this.context.clearRect(0, 0, this.el.width, this.el.height);
        this.el.style.opacity = 0;
      }
    }
  },
  destroyed() {
    // 清除上次没有执行的动画
    if (this.timer) {
      window.cancelAnimationFrame(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.ripple- {
  &btn {
    overflow: hidden;
    position: relative;
    outline: none;
    border-radius: 2px;
    text-align: center;
    &normal {
      height: 30px;
      padding: 5px 11px;
      font-size: 7px;
      color: rgba(255, 255, 255, 1);
      background: rgba(215, 117, 86, 1);
      &:hover {
        background: rgba(187, 53, 10, 1);
        cursor: pointer;
      }
    }
    &large {
      height: 40px;
      padding: 6px 11px;
      font-size: 8px;
      color: rgba(215, 117, 86, 1);
      border: 1px solid rgba(215, 117, 86, 1);
      &:hover {
        color:rgba(255,255,255,1);
        background:rgba(215,117,86,1);
        cursor: pointer;
      }
    }
  }

  &ripple {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
