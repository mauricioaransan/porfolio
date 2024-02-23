<template>
  <a :href="href" target="_blank">
    <div class="btn_icon"  :style="colors">
         <v-icon class="icon mt-1" large>
           {{ icon }}
         </v-icon>
         <span>{{ title }} </span>
    </div>
  </a>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "BtnIcon",
  props:{
    icon:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    color:{
      type:String,
      required:true
    },
    colorHover:{
      type:String,
      required:true
    },
    href:{
      type:String,
      required:true
    },
  },
  setup(props){
    const colors = computed(() => {
      return {
        '--color'       :   props.color,
        '--colorHover'  :   props.colorHover
      }
    })

    return{
      colors
    }
  }
})
</script>

<style scoped>
.btn_icon{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  font-family: sans-serif;
  overflow: hidden;
  box-shadow: 5px 10px 20px rgba(150, 150, 150, .3);
  transition: all .3s ease-out;
}
a{
  text-decoration: none;
  color: var(--color);
}
.icon{
  color: var(--color);
}
.btn_icon:hover{
  background-color: var(--colorHover);
  color: #ffffff;
  width: 150px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.btn_icon:hover .icon{
  color: #ffffff;
}
</style>