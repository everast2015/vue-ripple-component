<template>
  <div class="left-menu">
    <ul>
      <li>
        <router-link to="/first">第一章</router-link>
      </li>
      <li>
        <router-link to="/second">第二章</router-link>
      </li>
      <li>
        <router-link to="/three">第三章</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftMenu"
};
</script>

<style lang="css" scoped>
div.left-menu {
  position: fixed;
  top: 22px;
  left: 0;
  width: 100px;
  height: 100vh;
  background: pink;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}
</style>