<template>
    <div>
        <p>你好</p>
    </div>
</template>
<<script>
import  Router from "@/router";
import Vue from "Vue";
//Vue.use(Router);
export default {
    
  data() {
      return {
          name: 'value',
      }
  },
  mounted(){
       console.log("GoodsType");
  },
  methods: {
      getGoodsTypeItems() {
          
      }
  },
}
</script>
<style scoped>

</style>