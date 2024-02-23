<template>
  <v-row>
<!--    <v-col md="3" lg="3" xl="2" class="d-none d-sm-none d-md-flex">-->
<!--      -->
<!--    </v-col>-->
    <v-col sm="12" xs="12" md="12" lg="12" xl="12">

      <v-sheet color="transparent" class="d-none d-sm-none d-md-flex btn_drawer">
        <NavigationBarLeft/>
      </v-sheet>
      <!-- <v-sheet color="transparent" class="d-sm-flex d-md-none btn_drawer">
        <NavigationBarHidden/>
      </v-sheet> -->
      <about-me/>
    </v-col>

  </v-row>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import NavigationBarLeft from '../components/NavigationBarLeft/NavigationBarLeft.vue'
  import NavigationBarHidden from '../components/NavigationBarLeft/NavigationDrawerHidden.vue'
  import AboutMe from '../components/about/aboutme.vue'

  export default defineComponent({
    name: 'Home-View',

    components: {
      NavigationBarLeft,
      // NavigationBarHidden,
      AboutMe,
    },

    setup(){



      return {

      }
    }
  })
</script>
<style>
  .v-item-group{
    max-width: fit-content !important;
    margin: 0 auto;
  }
  .btn_drawer{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    color: white;
  }
</style>