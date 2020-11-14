<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 引入子组件内容 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <greeting></greeting>
    <ProjectList></ProjectList>
  </div>
</template>

<script>
  //导入子组件
import HelloWorld from './components/HelloWorld.vue'
import greeting from "./components/greeting"
import ProjectList from "./components/ProjectList"
export default {
  name: 'App',
  components: { //声明子组件内容
    HelloWorld,
    greeting,
    ProjectList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
