<template>
  <div id="app">
    <!-- <router-view/> -->
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/balnk">跳转空白页</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div><p>首页index</p>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
