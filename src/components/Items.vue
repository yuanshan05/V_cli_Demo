<template>
    <div>
        <p>Items</p>
        <p>{{Id}}</p>        
    </div>
</template>
<script>
import Router from "@/router";
import Vue from "Vue";

export default {
  data() {
    Id: ""
    para:0
    return {
      Id: "1234565"
    };
  },
  mounted() {    
     console.log("Item");
     this.para=this.$route.params['id'];
     console.log(this.para);
     this.load(this.para);
    },
  methods: {
    //   ready:function(){
    //      para=   this.$route.params.id;
    //   },
    load(id) {
      if (id == 2) {
        this.Id = "Items2";
      } else {
        this.Id = "Item1";
      }
    }
  }
};
</script>

<style scoped>

</style>