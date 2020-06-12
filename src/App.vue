<template>
  <v-app>
    
    <v-content>
      <!-- <NavBar/> -->
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
// import NavBar from './components/home/NavBar';

export default {
  name: 'App',

  components: {
    // NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
