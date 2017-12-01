<template>
  <div class="hello">
   <!-- <h1>{{ msg }}</h1> -->
    <h2>Essential Links</h2>
   <!-- <h2>{{httpResult}}</h2>  -->
   <!-- <router-link to="/goods">类型</router-link> -->
   <button class="btn btn-primary btn-xs" @click="TestButtonClick()">测试</button>
  <ul id="types">
    <li>
      <label>名称</label> -- <label>ID</label> -- <label>乐园ID</label>
    </li>
      <li v-for="item of vueSS">       
         {{item.name}} -- {{item.id}} --{{item.oparkId}}   
      </li>
    </ul> 
  </div>
</template>

<script>
import Vue from "vue";
import router from "vue-router";
import resource from "vue-resource";

export default {
  name: "HelloWorld",
  data() {
    var data1 = new Vue({
      // el:"#types",
      data: {
        object: {
          name: "测试",
          age: 18
        }
      }
    });
    return {
      // msg: "Welcome to Your Vue.js App",
      httpResult: null,
      vueSS: null
    };
  },
  mounted() {
    console.log("Helloword");
    this.getTicketItem();
  },
  methods: {
    TestButtonClick(arg, event) {
      console.log("Button Click");
      this.$router.push({name:'goodstype'});
    },
    async getTicketItem() {
      var vm = this;
      /*  var requestConfig = {
        credentials: "include",
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "force-cache"
      };
      const response = await fetch(
        "http://api-client-test.fcleyuan.com/api/GoodsType/65/QueryList",
        requestConfig
      );
      var rss = await response.json();
      vm.httpResult = rss;
      var datars = rss.data;
      // console.log(datars);
      vm.vueSS = datars;
      // vm.vueSS =JSON.parse(rss);
      console.log("-----------------");
      // console.log(vm.vueSS);
      */
      //var resource = this.$resource('http://api-client-test.fcleyuan.com/api/GoodsType/65/QueryList');
      //Vue.http.get();
      this.$http
        .get("http://api-client-test.fcleyuan.com/api/GoodsType/65/QueryList")
        .then(
          respone => {
            var rss = respone.body;
            vm.httpResult = rss;
            var datars = rss.data;
            // console.log(datars);
            vm.vueSS = datars;
          },
          respone => {
            alert("请求错误");
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  /* list-style-type: none;*/
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
