<template>
    <div>
        <p>你好</p>
                <div>
            <input v-model="inputValue" type="text"/>
            <p>{{inputValueChange}}</p>
            <p>{{name}}</p>
            <a @click="getGoodsTypeItems">setter</a>
        </div>
        <router-link :to="{name:'goodsitem'}">嵌套路由</router-link>
        <router-view></router-view>
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
            return this.inputValue/*.split('').reverse().join('')*/;
            // if(this.inputValue==1){
            //     return "正确";
            // }else{
            //     return "Error";
            // }
        },
        set:function(newValue)  {
            console.log(["setter",newValue]);
            this.inputValue=newValue;
            console.log(["setter",this.inputValue]);
        }
     }
 },
  mounted(){
       console.log("GoodsType");
       console.log(["2-mounted",this.inputValue]);
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