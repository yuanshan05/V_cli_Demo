<template>
    <div>
        <p>你好</p>
        <router-link :to="{name:'goodsitem'}">嵌套路由</router-link>
        <router-view></router-view>
        <div>
            <input v-model="inputValue" type="text"/>
            <p>{{inputValueChange}}</p>
            <p>{{name}}</p>
            <a @click="getGoodsTypeItems">setter</a>
        </div>
    </div>
</template>
<<script>
import Vue from "vue";
import router from "vue-router";
import resource from "vue-resource";

export default {

  data() {
      return {
          name: 'value',
          inputValue:"",
      }
  },
 computed: {
     inputValueChange:{
        get:function(value){
            console.log(["gettter",this.inputValue]);
            return this.inputValue.split('').reverse().join('');
            // return this.inputValue;
        },
        set:function(value)  {
            console.log(["setter",value]);
           this.inputValue=value;
            console.log(["setter",this.inputValue]);
        }
     }
 },
//  watch: {
//      inputValue:function (newvalue,oldvalue) {
//          console.log(["3-watch-oldvalue",oldvalue]);
//          this.inputValue=newvalue;
//          console.log(["3-watch-newValue",newvalue])
//      }
//  },
  mounted(){
       console.log("GoodsType");
       console.log(["2-mounted",this.inputValue]);

    // this.inputValueWatch;
  },
  methods: {
      getGoodsTypeItems() {
          this.inputValue="Hello Word";
      }
  },
}
</script>
<style scoped>

</style>