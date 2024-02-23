<template>
  <v-sheet id="skills" class="mt-10 pl-5 pr-5">
    <h1 class="port_title">Habilidades</h1>
    <v-row class="ma-4">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" >
        <BarComponent
            v-for="(item,i) in itemsleft"
            :key="i"
            :title="item.title"
            :value="item.value"
            :color="item.color"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" >
        <BarComponent
            v-for="(item,i) in itemsright"
            :key="i"
            :title="item.title"
            :value="item.value"
            :color="item.color"
        />
      </v-col>

    </v-row>
  </v-sheet>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BarComponent from "@/components/skill/barComponent.vue";

export default defineComponent({
  name: "skills-component",
  components:{
    BarComponent
  },
  setup(){
    const itemsleft = ref([
      {title:'HTML',        value:'90',   color:'#0D47A1'},
      {title:'CSS',         value:'75',   color:'#1565C0'},
      {title:'VUE',         value:'65',   color:'#1976D2'},
      {title:'Informix',    value:'60',   color:'#1976D2'},
      {title:'JavaScript',  value:'50',   color:'#1E88E5'},
    ]);

    const itemsright = ref([
      {title:'TypeScript',  value:'50',   color:'#1E88E5'},
      {title:'Flutter',     value:'50',   color:'#1E88E5'},
      {title:'GIT',         value:'40',   color:'#42A5F5'},
      {title:'Java Web',    value:'40',   color:'#42A5F5'},
    ])


    return{
      itemsleft,itemsright
    }
  }
})
</script>

<style scoped>
.port_title{
  text-transform: uppercase;
  color:  #003785;
  transition: 0.2s;
}
.port_title:hover{
  text-shadow: 0 0 3px #040b14;
  transition: 0.2s;
  cursor:pointer;
}
</style>