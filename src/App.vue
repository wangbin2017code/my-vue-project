<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <todo-list msg="todo-list msg from 父组件" @sendMsgFromSon = 'getSonMsg'></todo-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TodoList from './components/Todo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList
  },
  methods: {
    getSonMsg: function (sonMsg) {
      alert(sonMsg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
