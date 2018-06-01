<template>
  <div class="to_do_class">
    <h1>todolist</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew"/>
    <div class="content">
      <ul>
        <li v-for="item in items" :key="item.id" :class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
      </ul>
    </div>
    <button @click="clickme">点我</button>
    <img :src="imgPath"/>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'todolist',
  props: ['msg'],
  data () {
    return {
      newItem: '',
      items: store.fetch(),
      imgPath: 'http://192.168.221.128:8080/examples/test.jpg'
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        isFinished: false,
        label: this.newItem
      })
      this.newItem = ''
    },
    clickme: function () {
      alert(this.msg)
      this.$emit('sendMsgFromSon', 'from son msg!')
    }
  },
  watch: {
    items: {
      handler: function (val, oldValue) {
        store.save(this.items)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
  .content{
    margin: 30px 653px;
    width: 200px;
    height: 200px;
  }
  .finished{
    text-decoration: underline;
  }
</style>
