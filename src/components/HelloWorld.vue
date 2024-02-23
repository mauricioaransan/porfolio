<template>
  <v-container>
    <v-timeline
        align-top
        :dense="mdAndDown"
        style="max-width: 1000px"
    >
      <v-timeline-item
          color="brown"
          icon="mdi-airballoon"
          fill-dot

      >
        <v-card
            elevation="10"
            dark
        >
          <v-card-title class="text-h6">
            Técnico Instalador
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>Técnico encargado en el canalizado, cableado, instalación y monitoreo de los distintos dispositivos en el Sistema de Alarma contra Incendios. También encargado del mantenmiento e instalación de los dispositivos de CCTV.</p>
            <v-btn
                color="red"
                class="mx-0"
                outlined
            >
              Button
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>

</template>

<script lang="ts">
  import {defineComponent, ref} from 'vue';
  import { useDisplay }   from 'vuetify';


  export default defineComponent({
    name: 'HelloWorld',
    setup() {

      const {mdAndDown}       = useDisplay();
      const items = ref([
      {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ])
      return{
        items, mdAndDown
      }
    },

    // data: () => ({
    //   items: [
    //     {
    //       color: 'red lighten-2',
    //       icon: 'mdi-star',
    //     },
    //     {
    //       color: 'purple darken-1',
    //       icon: 'mdi-book-variant',
    //     },
    //     {
    //       color: 'green lighten-1',
    //       icon: 'mdi-airballoon',
    //     },
    //     {
    //       color: 'indigo',
    //       icon: 'mdi-buffer',
    //     },
    //   ],
    // }),
  })
</script>

<style>
body{
  background-color: grey;
}
</style>