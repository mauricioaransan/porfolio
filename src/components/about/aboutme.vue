<template>

<!-- <v-sheet color="#F8F9F9" :style="mdAndUp ? 'padding-left: 50px' : 'padding-left: 0'"> -->
<v-sheet color="background" >
  
  <v-card
      height="100vh"
      id="home"
      elevation="0"
      class="d-flex align-center"
      color="transparent"
      image="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"

  >
    <v-col class="justify-center " cols="12">
      <div>
        <p class="personal_name pa-0 mt-16">Mauricio Arancibia Sánchez</p>
      </div>
      <div class="container_animation ">
        <span class="text first_text"> Desarrollador </span>
        <typewriter
            :replace="replace"
            :type-interval="200"
            :replace-interval="1000"
        >
          <span class="text typed-text"> {{text_typed}}</span>
        </typewriter>
      </div>
    </v-col>
  </v-card>

  <v-sheet id="about" class="mt-10 pl-5 pr-5" color="transparent">
    <!-- <v-select
    class="mb-3 ml-4"
    v-model="locale"
    :items="language"
    item-title="title"
    item-value="value"
    density="compact"
    variant="outlined"
    hide-details
    >
    </v-select> -->

    <v-switch 
    v-model="themeSwitch" 
    append-icon="mdi-weather-night" 
    prepend-icon="mdi-white-balance-sunny"
    hide-details
    >
    </v-switch>
    <h1 class="port_title mb-10"> {{ $t('titles.aboutme') }}</h1>
    <v-row >
      <v-col cols="12" xs="12" sm="12" md="4" lg="6" xl="6" class="about_text_principal">
        <v-sheet width="85%" style="margin: 0 auto" elevation="0" color="transparent" class="mt-3 pa-5 personal_info_card">
          <span class="about_text_develop">{{ $t('labels.webDev') }} </span>
          <span> {{ $t('labels.knowledge') }} </span>
          <p> {{ $t('labels.consider') }} </p>
        </v-sheet>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="8" lg="6" xl="6"  align-self="stretch">

          <h3 class="port_subtitle">{{ $t('titles.personalInfo') }}</h3>
          <v-row>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" >
              <v-sheet elevation="5" class="pa-5 personal_info_card" height="100%">
                <div> <span class="personal_info_header"> {{ $t('labels.name') }}: </span> <span class="personal_info_info"> Mauricio Arancibia</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.age') }}: </span> <span class="personal_info_info"> 26 {{ $t('labels.years') }}</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.email') }}: </span> <span class="personal_info_info"> mauricioaransan@gmail.com</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.address') }}: </span> <span class="personal_info_info"> Villa el Salvador - Lima </span> </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" >
              <v-sheet elevation="5" class="pa-5 personal_info_card">
                <div> <span class="personal_info_header"> {{ $t('labels.skill') }}: </span> <span class="capitalize"> FrontEnd</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.expe') }}: </span> <span class="personal_info_info"> 2 {{ $t('labels.year') }}</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.language') }}: </span> <span class="capitalize"> {{ $t('labels.spanish') }}</span> </div>
                <div> <span class="personal_info_header"> {{ $t('labels.freelance') }}: </span> <span class="personal_info_info"> {{ $t('labels.available') }} </span> </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-5" :class="mdAndDown ? 'justify-center' : 'justify-start'">
            <botonHover colorHover="#2196f3" :title="button" isDownload='true' />
          </v-row>
      </v-col>
    </v-row>



    <v-sheet color="transparent" id="experiencie" class="ma-0 mt-8">

      <v-tabs
      v-model="tab"
      bg-color="transparent"
      :center-active="true"
      color="purple"
      density="comfortable"
      direction="horizontal"
      align-tabs="center"
      >
            <v-tab value="exp">{{ $t('buttons.expe') }}</v-tab>
            <v-tab value="edu">{{ $t('buttons.educ') }}</v-tab>
            <v-tab value="adi">{{ $t('buttons.add') }}</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">

              <v-scale-transition>
                <v-window-item value="exp">
                  <TimeLineExperience/>    
                </v-window-item>
              </v-scale-transition>                

              <v-scale-transition>
                <v-window-item value="edu">
                  <TimeLineEducational/>
                </v-window-item>
              </v-scale-transition>

              <v-scale-transition>
                <v-window-item value="adi">
                  <TimeLineAdditional/>
                </v-window-item>
              </v-scale-transition>
                
            </v-window>
        </v-card-text>

    </v-sheet> 
  </v-sheet>


  <Portafolio/>

  <v-sheet
      id="skills"
  >
    <Skills/>
  </v-sheet>

  <v-sheet id="contactme">
    <ContactMe/>
  </v-sheet>
</v-sheet>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, computed, watch} from "vue";
import TimeLineEducational from "@/components/about/timelineeducational.vue";
import TimeLineAdditional from "@/components/about/timelineaditional.vue";
import TimeLineExperience from "@/components/about/timelineexperience.vue";
import Skills from "@/components/skill/skills.vue";
import ContactMe from "@/components/contactme/contactme.vue";
import Portafolio from "@/components/Portafolio/Portafolio.vue";
import Typewriter from "@/components/tipper.vue"
import botonHover from "@/components/Buttons/BotonHover.vue";

import {useI18n} from 'vue-i18n';

import { useTheme, useDisplay }   from 'vuetify';

export default defineComponent({
  components:{
    Portafolio,
    TimeLineEducational,
    TimeLineAdditional,
    TimeLineExperience,
    Skills,
    ContactMe,
    Typewriter,
    botonHover,
  },

  name: "about-me",
  setup(){

    const {locale, t} = useI18n();
    
    const theme                     = useTheme();
    const themeSwitch     = ref(localStorage.getItem('appTheme')?.toString() === 'true');

    const language        = ref([ 
          { title: 'espanol', value: 'es' },
          { title: 'ingles', value: 'en' },
        ])
    const {mdAndDown, mdAndUp}       = useDisplay();
    const colorFromScript = ref('#000')
    const model = ref(0);

    const button = computed(() => t('buttons.download'))

    const tab = ref()
    const items = ref([
      {title: 'Experiencia'},
      {title: 'Educacion'},
      {title: 'Adicional'},
    ]);
    const time      = ref(2)
    const text_typed = ref('Front-End');

    const  replace=  ref([
          { from: "Front-End",  to: "Back-End" },
          { from: "Back-End",   to: "Front-End" },
          { from: "Front-End",  to: "Back-End" },
        ])

    watch(themeSwitch,(p:boolean,a:boolean)=>{

    localStorage.setItem('appTheme', p.toString());
    let themeSelect = '';
    p ? themeSelect = 'darkCustom' : themeSelect = 'lightCustom';
    theme.global.name.value = themeSelect;
    a===p ? null : null;

    })

  onMounted(()=>{
    setInterval(()=>{
      if(time.value === 2 ){
        text_typed.value = 'Back-End'
      }
      if(time.value === 1 ){
        text_typed.value = 'Front-End'
        return time.value  = 2
      }
      time.value -= 1
    },4000)

    let themeSelect = '';
          themeSwitch.value ? themeSelect = 'darkCustom' : themeSelect = 'lightCustom';
          theme.global.name.value = themeSelect;
  })
    return{
    model,items,text_typed,time,replace,colorFromScript,
    mdAndDown, mdAndUp,
    tab,
    language, locale, button,
    themeSwitch
    }
  },


})
</script>

<style>

.personal_name{
  font-size: 2.4rem;
  color: white;
  padding-left: 100px !important;
}

.port_title{
  text-transform: uppercase;
  color:  #003785;
  transition: 0.2s;
}
.port_title:hover{
  text-shadow: 0 0 3px #040b14;
  transition: 0.2s;
  cursor:pointer;
}
.port_subtitle{
  text-transform: uppercase;
  color: red;
  margin-bottom: 5px;
}

.about_text_principal{
  text-align: justify;
}
.about_text_develop{
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;

}
.personal_info_card{
  border-radius: 20px;
}
.personal_info_header{
  font-weight: bold;
  margin-right: 10px;
  text-transform: capitalize;
}
.btn_slide_group{
  font-size: 20px;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 600 !important;
  background-color: #616069 !important;
  border: none !important;
  border-radius: 15px;
  color: #b9ffff !important;

}
.btn_slide_group_activated{
  font-size: 20px;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 600 !important;
  background-color: #040b14 !important;
  border-radius: 15px;
  border: none !important;
  color: #706fd3;
  transition: 0.3s;
  border: 2px solid #282459FF;
  box-shadow: 0 0 0 1px #282459FF;
  animation: anim-shadow .4s ease-out;
}
@keyframes anim-shadow {
  100%{
    box-shadow: 0 0 15px 6px rgb(58,57,110);
  }
}


.experience_card{
  transition: 2s;
}
.container_animation{
  padding-left: 100px;
  display: flex;
  width: 100%;
}
.container_animation .text{
  position: relative;
  color: yellow ;
  font-size: 4rem;
  font-weight: normal;
}
.container_animation .text.first_text{
  color: white;
  padding-right: 24px;
}

.capitalize{
  text-transform: capitalize;
}

</style>