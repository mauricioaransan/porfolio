<template>
    <v-card
        color="#040b14"
        class="navigation_bar_fixed"
        height="100vh"
    >

      <v-navigation-drawer
          :temporary="false"
          rail
          expand-on-hover
          color="#040b14"
          @update:rail="changeRail($event)"
      >
        <v-row justify="center" class="ma-0 my-5">
          <v-avatar
              :size=" avatarWidth ? '55px' : '135px'"
              :class="avatarWidth ? 'avatar_img_hover' : 'avatar_img'"
          >
            <v-img
            alt="Avatar"
            :src="avatarWidth ? require('@/assets/profile_img_small2.jpg') : require('@/assets/profile_img_medium.jpg')"
            />
          </v-avatar>
        </v-row>


        <!-- <v-list-item-title v-if="hover" class="principal_title mb-12">Mauricio Arancibia </v-list-item-title> -->
        <v-list
            nav
            dense
        >
          <v-list-item
              link
              v-for="(item,i) in items"
              :key="i"
              @click="postRouter(`${item.goto}`)"
              style="margin-bottom: 20px"
              class="nav_item"
              :prepend-icon="item.icon"
              :color="'white'"
          >
            <v-list-item-title class="nav_item_title"> {{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list>


      </v-navigation-drawer>

    </v-card>

</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import {useI18n} from 'vue-i18n';

export default defineComponent({

  setup(){

    const {t} = useI18n();
  const items = ref([
    {icon: 'mdi-home',                  title:computed(() => t('titles.home')),       goto:'home'      },
    {icon: 'mdi-account',               title:computed(() => t('titles.aboutme')),    goto:'about'     },
    {icon: 'mdi-file-document-outline', title:computed(() => t('titles.portfolio')),  goto:'portfolio' },
    {icon: 'mdi-chart-box-outline',     title:computed(() => t('titles.skills')),     goto:'skills'    },
    {icon: 'mdi-server',                title:computed(() => t('titles.contacme')),   goto:'contactme' },
  ])

  const avatarWidth = ref(true)

    const postRouter = (item:string) => {

      const elemento = document.getElementById(item);

      if(elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const changeRail = (valueRail:any) => {
      avatarWidth.value = valueRail
    }

    return{
      items, postRouter, avatarWidth, changeRail
    }
  }
});
</script>







<style>
.navigation_bar_fixed{
  position: fixed;
}


.avatar_img{
  border:   8px solid grey;

}
.avatar_img_hover{
  border:   3px solid grey;

}
.nav_item:hover,
.nav_item:hover .nav_item_icon,
.nav_item:hover .nav_item_title{
  cursor: pointer;
  color: #2196f3 !important;
  transition: .4s;
}
.nav_item_title{
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px !important;
  color: white;
}
.principal_title{
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 23px;
}
.v-btn__content{
  align-items: start !important;
}
.navigation_bar_fixed .v-btn{
  justify-content: left !important;
  color:#149ddd !important;
}
</style>