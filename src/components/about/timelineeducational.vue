<template>
  <v-timeline :dense="smAndDown">
    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :dot-color="item.color"
        fill-dot
        :icon="item.icon"
    >
      <v-card class="mx-4 time_line_card" color="cards">
        <v-col class="pa-4">
          <div class="card_timelapse">{{ item.timelapse }}</div>
          <div class="card_title">{{ item.title }}</div>
          <div class="card_place">{{ item.place }}</div>
          <div class="card_content">
            {{ item.content }}
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import { useDisplay }   from 'vuetify';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: "timeline-educational",
  setup(){
    
    const {t} = useI18n()
    const {smAndDown}       = useDisplay();
    const items = ref([
      {
        color:          'coloriconselect',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return t('date.sep') + ', 2015 - feb, 2021'}),
        title:          computed(()=> t('timeline.edu.title1')),
        place:          'UNTELS, Perú',
        content:        computed(()=> t('timeline.edu.content1')),
      },
      {
        color:          'coloricondefault',
        icon:           'mdi-file-document-outline',
        timelapse :     computed(()=>{ return 'Mar, 2008 - ' + t('date.dec') + ', 2012'}),
        title:          computed(()=> t('timeline.edu.title2')),
        place:          'Héroes del Alto Cenepa, Perú',
        content:        computed(()=> t('timeline.edu.content2')),
      },
      {
        color:          'coloricondefault',
        icon:           'mdi-file-document-outline',
        timelapse :     computed(()=>{ return 'Mar, 2002 - ' + t('date.dec') + ', 2007'}),
        title:          computed(()=> t('timeline.edu.title3')),
        place:          'Héroes del Alto Cenepa, Perú',
        content:        computed(()=> t('timeline.edu.content3')),
      },
    ])

    return{
      items, smAndDown
    }
  }
})
</script>
