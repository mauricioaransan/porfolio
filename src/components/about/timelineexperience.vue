<template>
  <v-timeline :dense="smAndDown" >

    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :dot-color="item.color"
        fill-dot
        :icon="item.icon"
        size="large"
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
  name: "timeline-experience",
  setup(){


    
    const {t} = useI18n()
    
    const {smAndDown}       = useDisplay();

    const items = ref([
      {
        color:          'coloriconselect',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return `mar, 2022 - ${t('date.jan')}, 2023`}),
        title:          computed(()=> t('timeline.exp.title1')),
        place:          'DEISTER SOFTWARE PERU',
        content:        computed(()=> t('timeline.exp.content1'))
      },
      {
        color:          'coloricondefault',
        icon:           'mdi-briefcase-outline',
        timelapse :     computed(()=>{ return 'nov, 2022 - ' + t('date.jan') + ', 2023'}),
        title:          computed(()=> t('timeline.exp.title2')),
        place:          'encode solutions, peru',
        content:        computed(()=> t('timeline.exp.content2'))
      },
      {
        color:          'coloricondefault',
        icon:           'mdi-briefcase-outline',
        timelapse :     'may, 2021 - mar, 2022',
        title:          computed(()=> t('timeline.exp.title3')),
        place:          'encode solutions, peru',
        content:        computed(()=> {
          return  t('timeline.exp.content3') +  t('timeline.exp.content4')
        })
      },
      {
        color:          'coloricondefault',
        icon:           'mdi-briefcase-outline',
        timelapse :     'feb, 2018 - feb, 2020',
        title:          computed(()=> t('timeline.exp.title4')),
        place:          'SODIMAC, peru',
        content:        computed(()=> {
          return  t('timeline.exp.content5') +  t('timeline.exp.content6') +  t('timeline.exp.content7')
        })
      },

    ])

    return{
      items, smAndDown
    }
  }
})
</script>