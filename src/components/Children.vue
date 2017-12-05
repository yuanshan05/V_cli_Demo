<template>
    <div id="child">
        <p>{{msg}}</p>   
        <p>{{message}}</p>     
        <a @click="OnClick">事件</a>
        <slot>
            
        </slot>
    </div>    
</template>

<script>
import Vue from "vue";

export default {
  name: "child",

  data: function() {
    return {
      message: ''
    };
  },
  props: {
    msg: {}
  },
  mounted() {
    this.msg;
    this.message;
  },
  methods: {
    OnClick() {
      this.message = this.msg
        .split("")
        .reverse()
        .join("");
    //   this.msg=this.message;
      this.$emit("reverse");
    }
  }
};
</script>

<style scoped>
div {
  background: red;
}
</style>