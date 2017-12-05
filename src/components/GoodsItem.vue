<template>
    <div>        
       <div class="divChild">
        <p>{{test}}</p>
        <br/>
        <Children :msg="key" >
          <p>测试插槽1</p>
          <p>测试插槽2</p>
          <p>测试插槽3</p>
        </Children>
        <br/>
       </div>
    </div>
</template>
<script>
import Vue from "vue";
import Children from "@/components/Children";

export default {
  data() {
    return {
      key: "Child.msg",
      test: Children
    };
  },
  components: {
    Children
  },
  mounted() {
     this.key;
  },
  methods: {
      onReverse() {
          var temp=this.key.split('').reverse().join('');
          this.key=temp;
      }
  },
};
</script>

<style scoped>
.divChild {
  background: lightgreen;
  height: 100px;
}
</style>