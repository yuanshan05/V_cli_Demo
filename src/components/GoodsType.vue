<template>
    <div>
        <p>你好</p>
        <router-link :to="{name:'goodsitem'}">嵌套路由</router-link>
        <router-view></router-view>
        <div class="">
            <input v-bind="{inputValue}" type="text"/>
            <p>{{inputValue}}</p>
        </div>
    </div>
</template>
<<script>
import { Vue } from "vue";
export default {
    inputValue:"",

  data() {
      return {
          name: 'value',
          inputValue:"",
      }
  },
  mounted(){
       console.log("GoodsType");
       this.inputValue;
  },
  watch: {
      inputValue(newValue, oldValue) {
         console.log(newValue);
         console.log(oldValue);
      }
  },
  methods: {
      getGoodsTypeItems() {
          
      }
  },
}
</script>
<style scoped>

</style>