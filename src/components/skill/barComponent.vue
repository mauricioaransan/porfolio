<template>
<v-col>
  <div class="progress_title">
    {{ title }}
  </div>
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
/* .v-progress-linear--striped .v-progress-linear__determinate {
  animation: progress-linear-stripes 1s infinite linear;
}

@keyframes progress-linear-stripes {
  0% {
    background-position-x: 40px;
  }
} */
</style>