<template>
  <div class="home">
    <v-app id="inspire">
      <v-card
        class="mx-auto overflow-hidden main"
        height="300%"
        width="100%"
        color="rgba(0, 0, 0, 0.8)"
      >
        <NavBar/>
          <RecentTrailerPlayer/>
        <div class="container">
          <br>
          <hr>
          <MovieList/>
          <h1 class="white">여기 footer 넣을거에요</h1>
        </div>
        <br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </v-card>
    </v-app>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

// @ is an alias to /src
import NavBar from '../components/home/NavBar.vue'
import RecentTrailerPlayer from '@/components/home/RecentTrailerPlayer.vue'
import MovieList from '@/components/MovieList/MovieList.vue'
// import HomeReviewList from '@/components/HomeReviewList.vue'
// import HomeCommentList from '@/components/HomeCommentList.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    RecentTrailerPlayer,
    MovieList,
    // ReviewList,
    // CommentList,
  },
  // methods: {
  //   ...mapActions(['getVideoId'])
  // },
  // created() {
  //   this.getVideoId()
  // }
}
</script>

<style>

</style>