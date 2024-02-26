<template>
  <v-sheet id="skills" class="mt-10 pa-5" color="bgcards">
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
      {title:'CSS',         value:'75',   color:'#074DC6'},
      {title:'VUE',         value:'65',   color:'#0061F6'},
      {title:'Informix',    value:'60',   color:'#0578FF'},
      {title:'JavaScript',  value:'50',   color:'#1D99FF'},
    ]);

    const itemsright = ref([
      {title:'TypeScript',  value:'50',   color:'#1D99FF'},
      {title:'Flutter',     value:'50',   color:'#1D99FF'},
      {title:'GIT',         value:'40',   color:'#47BAFF'},
      {title:'Java Web',    value:'40',   color:'#47BAFF'},
    ])


    return{
      itemsleft,itemsright
    }
  }
})
</script>