<template>
  <v-sheet id="portfolio" class="mt-10 pa-5" color="bgcards" >
    <h1 class="mt-5 port_title"> {{ $t('titles.portfolio') }}</h1>
    <v-row class="px-10 mt-10" justify="center">
      <v-col cols="12" sm="6" md="4" lg="4" xl="4"   v-for="(item,id) in items" :key="id">
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet v-bind="props" color='transparent' class="pa-0 ma-0">
            <v-img
            :src="item.image"
            height="315"
            width="100%"
            >
            <v-expand-transition>
              <v-sheet
              outlined
              class="d-flex transition-fast-in-fast-out card-portfolio"
              style="height: 100%;"
              color="cards" 
              v-if="isHovering"
                >
                    <v-col  align-self="center">
                      <div class="px-4 port_info_title">{{item.title}}</div>
                      <div class="px-4 port_info_content" > {{ item.content }}</div>
                      <v-row justify="center" class="ma-0 pa-0">
                        <botonHover :colorHover="item.color" :title="title" :redirect="item.url" isDownload="false" />
                      </v-row>
                    </v-col>
                </v-sheet>
              </v-expand-transition>
            </v-img>
          </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import botonHover from "@/components/Buttons/BotonHover.vue";
import {useI18n} from 'vue-i18n';

export default defineComponent ( {
  name: "Portafolio-View",
  components:{
    botonHover
  },
  setup(){


    
    const {t} = useI18n();
    const title = computed(() => t('buttons.info'))

    const items = ref([
      {
        image:    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
        title:    computed(()=> t('titles.appForm')),
        content:  computed(()=> t('labels.portfolio1')),
        url:      'ficha',
        color:    '#00eeff'
      },
      {
        image:    'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        title:    computed(()=> t('titles.synlab')),
        content:  computed(()=> t('labels.portfolio2')),
        url:      'labco',
        color:    '#16FA1D'
      },
      {
        image:    'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title:    computed(()=> t('titles.portfolio')),
        content:  computed(()=> t('labels.portfolio3')),
        url:      'portfolio',
        color:    '#FA16A8'
      },
      {
        image:    'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title:    computed(()=> t('titles.appAltillo')),
        content:  computed(()=> t('labels.portfolio4')),
        url:      'appAltillos',
        color:    '#1D16FA'
      }
    ])


    return{
      items, title
    }
  }
})
</script>