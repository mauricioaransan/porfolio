<template>
  <v-timeline :dense="smAndDown">
    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :dot-color="item.color"
        fill-dot
        :icon="item.icon"
    >
      <v-card class="mr-4 time_line_card" >
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
  name: "timeline-aditional",
  setup(){

    const {t} = useI18n()
    const {smAndDown}       = useDisplay();
    const items = ref([
      {
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return t('date.apr') + ', 2022 - oct, 2022'}),
        title:          'Vue2 - Vue3',
        place:          'UDEMY',
        content:        computed(() => t('timeline.add.content1'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     'feb, 2022 - Feb, 2022',
        title:          'macros y VBA',
        place:          'UDEMY',
        content:        computed(() => t('timeline.add.content2'))
      },
      {
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return 'nov, 2021 - ' + t('date.jan') + ', 2022'}),
        title:          'universidad JAVA',
        place:          'UDEMY',
        content:        computed(() => t('timeline.add.content3'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-star-box-outline',
        timelapse :     computed(()=>{ return  t('date.sep') + ', 2021 - oct, 2021'}),
        title:          'HTML, CSS & JavaScript',
        place:          'UDEMY',
        content:        computed(() => t('timeline.add.content4'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     computed(()=>{ return  t('date.aug') + ', 2021 - ' + t('date.sep') + ', 2021'}),
        title:          'microsoft office',
        place:          'UDEMY',
        content:        computed(() => t('timeline.add.content5'))
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     computed(()=>{ return  t('date.sep') + ', 2020 - feb, 2021' }),
        title:          'flutter & dart',
        place:          'UDEMY & youtube',
        content:        computed(() => t('timeline.add.content6'))
      },
    ])

    return{
      items,smAndDown
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