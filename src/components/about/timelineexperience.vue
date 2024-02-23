<template>
  <v-timeline :dense="smAndDown">

    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :dot-color="item.color"
        fill-dot
        :icon="item.icon"
    >
      <v-card class="mx-4 time_line_card">
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
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return `mar, 2022 - ${t('date.jan')}, 2023`}),
        title:          computed(()=> t('timeline.exp.title1')),
        place:          'DEISTER SOFTWARE PERU',
        content:        computed(()=> t('timeline.exp.content1'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-briefcase-outline',
        timelapse :     computed(()=>{ return 'nov, 2022 - ' + t('date.jan') + ', 2023'}),
        title:          computed(()=> t('timeline.exp.title2')),
        place:          'encode solutions, peru',
        content:        computed(()=> t('timeline.exp.content2'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-briefcase-outline',
        timelapse :     'may, 2021 - mar, 2022',
        title:          computed(()=> t('timeline.exp.title3')),
        place:          'encode solutions, peru',
        content:        computed(()=> {
          return  t('timeline.exp.content3') +  t('timeline.exp.content4')
        })
      },
      {
        color:          '#81c9fa',
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

<style scoped>
.time_line_card{
  border-radius: 20px!important;
}

.card_timelapse{
  color: #149ddd;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
}
.card_title{
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 700;
  color: black;
  margin-bottom: 5px;
}
.card_place{
  font-size: 16px;
  font-style: italic;
  text-transform: uppercase;
  color: grey;
  margin-bottom: 10px;
}
.card_content{
  font-size: 16px;
  color: gray;
  line-height: 26px;
  text-align: justify;
  /**
  this is to generate hyphens in the words
   */
  hyphens: auto;
}
</style>