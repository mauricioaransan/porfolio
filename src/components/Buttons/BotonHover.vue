<template>
  <router-link :to="'/projects?id='+redirect"  :style="colors" v-if="isDownload === 'false'" >
      {{ title }}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </router-link>

  <a href="https://drive.google.com/file/d/1vfNTxnazqZpDgKhTU1O8wZlmi0SGCDLV/view?usp=sharing"
     v-else
     :style="colors"
     download="cv_mauricio.pdf"
     target="_blank"
  >
    {{ title }}
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

  </a>
</template>

<script lang="ts">
import {computed, defineComponent } from "vue";

export default defineComponent({
  name: "BotonHover",
  props:{
    colorHover:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    redirect:{
      type:String
    },
    isDownload:{
      type:String,
      required:true
    }
  },

  setup(props){
    const colors = computed(() => {
      return {
        '--color' : props.colorHover
      }
    })

    return{
      colors
    }
  }
})
</script>

<style scoped>

a{
  position: relative;
  display: inline-block;
  color: rgba(255,255,255) !important;
  font-size: 20px;
  letter-spacing: 5px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #040b14;
  padding: 10px 30px;
  transition: .5s;
  transition-delay: .8s;
}
a:hover{
  color: var(--color);
  text-shadow: 0 0 20px var(--color);
  letter-spacing: .25em;
  transition-delay: 1ms;
}
a span{
  position: absolute;
  display: block;
  background: var(--color);
  text-shadow: 0 0 5px var(--color);
}
a span:nth-child(1){
  left: 0;
  top: 0;
  width: 50.5%;
  height: 2px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform .5s;
}
a:hover span:nth-child(1){
  transform: scaleX(1);
  transform-origin: right;
}

a span:nth-child(2){
  right: 0;
  top: 0;
  width: 50.5%;
  height: 2px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .5s;
}
a:hover span:nth-child(2){
  transform: scaleX(1);
  transform-origin: left;
}

a span:nth-child(3){
  right: 0;
  top: 0;
  width: 2px;
  height: 100%;
  transform-origin: bottom;
  transform: scaleY(0);
  transition: transform .5s;
  transition-delay: .4s;
}
a:hover span:nth-child(3){
  transform: scaleY(1);
  transform-origin: top;
}

a span:nth-child(4){
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .5s;
  transition-delay: .4s;
}
a:hover span:nth-child(4){
  transform: scaleY(1);
  transform-origin: top;
}

a span:nth-child(5){
  left: 0;
  bottom: 0;
  width: 50.5%;
  height: 2px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .5s;
  transition-delay: .8s;
}
a:hover span:nth-child(5){
  transform: scaleX(1);
  transform-origin: left;
}
a span:nth-child(6){
  right: 0;
  bottom: 0;
  width: 50.5%;
  height: 2px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform .5s;
  transition-delay: .8s;
}
a:hover span:nth-child(6){
  transform: scaleX(1);
  transform-origin: right;
}
</style>