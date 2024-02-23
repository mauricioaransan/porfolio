<template>
  <v-sheet color="#F8F9F9">
   <v-row class="ma-0 pa-4">
    <v-btn to="/" color="#149ddd" dark fixed bottom right fab>
      <v-icon size="50">mdi-chevron-left</v-icon>
    </v-btn>
    <v-select
    class="mb-3 ml-4"
    v-model="locale"
    :items="language"
    item-title="title"
    item-value="value"
    density="compact"
    variant="outlined"
    hide-details
    >
    </v-select>
   </v-row>
    <h1 class="pt-6 pl-12 uppercase"> {{ $t('titles.project') }} </h1>

    <v-row v-for="(item,id) in items" :key="id" class="mt-12 mx-7">
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex align-center">
        <v-sheet :id="item.id" elevation="10" class="project_cards">
          <div class="project_title"> {{ item.title }} </div>
          <div v-html="item.content">  </div>
          <h5 class="mt-5 capitalize"> {{ $t('titles.techUsed') }} </h5>

          <v-row class="ma-0 mt-6" v-if=" id !== 3">
              <v-card  width="40" height="40" v-for="(tech,id) in item.tech" :key="id" class="mx-3 mb-5">
                <v-icon :color="tech.color" size="40">
                  {{tech.icon}}
                </v-icon>
              </v-card>
          </v-row>

          <v-row class="ma-0 mt-6" v-else>
            <v-card width="40" height="40" v-for="(tech,id) in techMobil" :key="id" class="mx-3 mb-5">
              <v-img  :src="tech.icon"></v-img>
            </v-card>
          </v-row>

        </v-sheet>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex align-center column_imgs">
        <v-carousel v-if="id !== 3" :value="item.model">
          <v-carousel-item
              v-for="(image, i) in item.images"
              :key="i"
          >
            <v-img
                height="100%"
                :src="image"
            >
            </v-img>
          </v-carousel-item>
        </v-carousel>

        <v-slide-group
            v-else
            v-model="model"
            class="pa-4"
            show-arrows
        >
          <v-slide-group-item
              v-for="(img,id) in item.images"
              :key="id"
              v-slot="{ toggle }"
          >
            <v-card
                elevation="1"
                height="600"
                width="300"
                :class="'ml-5'"
                @click="toggle"
            >
              <v-img
                  :src="img"
              >
              </v-img>
            </v-card>

          </v-slide-group-item>
        </v-slide-group>

      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: "ProjectsView",

  setup(){

    const { locale, t }   = useI18n();
    const model = ref(null);
    const language        = ref([ 
          { title: 'espanol', value: 'es' },
          { title: 'ingles', value: 'en' },
        ])

    const items:any = ref([
      {
        model:      0,
        id:         'ficha',
        title:      computed(() => t('titles.appForm')),
        content:    computed(()=> {
          return '<p>' + t('projects.appForm.first') 
          + ' ' + t('projects.appForm.second') + '</p> <p>' + t('projects.appForm.third') 
          + ' ' + t('projects.appForm.fourth') + '</p> <p>' + t('projects.appForm.fiveth') + '</p>'
        }),
        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                    ],
        images:     [
            'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
            'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ]
      },
      {
        model:      0,
        id:         'labco',
        title:      computed(() => t('titles.synlab')),
        content:    computed(()=> {
          return '<p>' + t('projects.synlab.first') + '</p> <p>' + t('projects.synlab.second') + '</p> <p>' + t('projects.synlab.third') + '</p> <p>' + t('projects.synlab.fourth') + '</p>'
        }),

        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                      {icon:'mdi-language-java', color:'#e84d31'},
                    ],
        images:     [
          require("..\\src\\assets\\img_portfolio\\labco\\img1.png"),
          require("..\\src\\assets\\img_portfolio\\labco\\img2.png"),
          require("..\\src\\assets\\img_portfolio\\labco\\img3.png"),
        ]
      },
      {
        model:      0,
        id:         'portfolio',
        title:      computed(() => t('titles.portfolio')),
        content:    computed(()=> {
          return '<p>' + t('projects.portfolio.first') + '</p> <p>' + t('projects.portfolio.second') + '</p>'
        }),
        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                    ],
        images:     [
          require("..\\src\\assets\\img_portfolio\\portFolio\\img1.png"),
          require("..\\src\\assets\\img_portfolio\\portFolio\\img2.png"),
          require("..\\src\\assets\\img_portfolio\\portFolio\\img3.png"),
        ]
      },
      {
        model:      0,
        id:         'appAltillos',
        title:      computed(() => t('titles.appAltillo')),
        content:    computed(()=> {
          return '<p>' + t('projects.appAltillo.first') 
            + '</p> <p>' + t('projects.appAltillo.second') 
            + '</p> <p>' + t('projects.appAltillo.third') 
            + '</p> <p>' + t('projects.appAltillo.fourth') 
            + ' '        + t('projects.appAltillo.fiveth') 
            + '</p> <p>' + t('projects.appAltillo.sixth') + '</p>'
        }),
        tech:       ['Flutter','Dart', 'mdi-firebase'],
        images:     [
          require("..\\src\\assets\\img_portfolio\\altillos\\img1.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img2.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img3.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img4.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img5.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img6.jpg"),
        ]
      }
    ])

    const techMobil = ref([
      {icon: 'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png'},
      {icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png'},
      {icon: 'https://img.icons8.com/color/512/firebase.png'},
    ])

    return{
      items,techMobil,model,
      locale, language
    }
  }

})
</script>

<style>

.column_imgs .v-item-group{
  max-width: 100% !important;
}

.project_cards{
  border-radius: 20px;
  padding: 15px;
}

.project_title{
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 800;
  text-transform: capitalize;
}

.capitalize{
  text-transform: capitalize;
}

.uppercase{
  text-transform: uppercase;
}
</style>