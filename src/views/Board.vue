<template>
  <div class="">
    <v-app id="inspire">
      <v-card
        class="mx-auto overflow-hidden main"
        height="300%"
        width="100%"
        color="rgba(0, 0, 0, 0.8)"
      >
        <NavBar/>
        <br><br><br>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'
import NavBar from '@/components/home/NavBar.vue'
export default {
  name: "MovieDetail",
  components: {
    NavBar,
  },
}


</script>

<style>

</style>