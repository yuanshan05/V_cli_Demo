<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="row">
      <div class="col-md-2 col-sl-offset-2">
        <router-link :to="{name:'goodstype'}">ABC</router-link>
        <br/>
        <router-link :to="{name:'HelloWorld'}">Hello</router-link>
        <br/>
        <router-link :to="{name:'Items',params:{id:2}}">Items2</router-link>
        <br/>
        <router-link :to="{name:'Items',params:{id:1}}">Items1</router-link>
        <br/>
        <router-link :to="{name:'Child'}">Children</router-link>
      </div>
      <div class="col-md-6">
        <router-view/>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'app'
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
