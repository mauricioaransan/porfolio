<template>
  <v-row class="ma-0">
      <v-col cols="2" class="pa-0 my-2">
        <v-sheet color="transparent">
        <span class="progress_title">
          {{ title }}
        </span>  
        </v-sheet>
      </v-col>
      <v-col class="pa-0 my-2">
        <v-progress-linear
        :color="color"
        :model-value="value"
        height="25"
        striped
        >
          <template v-slot:default="{ value }">
            <strong>{{ value }}%</strong>
          </template>
        </v-progress-linear>
      </v-col>
      
  </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "barComponent",
  props:{
    title:{
      type:String
    },
    value:{
      type:String
    },
    color:{
      type:String
    },
  },
})
</script>

<style >
.progress_title{
  margin-top: 10px;
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: bold;

}
</style>