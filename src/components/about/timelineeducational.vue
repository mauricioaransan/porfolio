<template>
  <v-timeline :dense="smAndDown">
    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :dot-color="item.color"
        fill-dot
        :icon="item.icon"
        :left="id===0 || id === 2"
        :right="id===1"
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
  name: "timeline-educational",
  setup(){
    
    const {t} = useI18n()
    const {smAndDown}       = useDisplay();
    const items = ref([
      {
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return t('date.sep') + ', 2015 - feb, 2021'}),
        title:          computed(()=> t('timeline.edu.title1')),
        place:          'UNTELS, Perú',
        content:        computed(()=> t('timeline.edu.content1')),
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     computed(()=>{ return 'Mar, 2008 - ' + t('date.dec') + ', 2012'}),
        title:          computed(()=> t('timeline.edu.title2')),
        place:          'Héroes del Alto Cenepa, Perú',
        content:        computed(()=> t('timeline.edu.content2')),
      },
      {
        color:          '#81c9fa',
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