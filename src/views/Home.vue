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
        <div style="background-color:black;color:black"><br/><br/><br/></div>
        <RecentTrailerPlayer/>
        <div class="container">
          <br>
          <hr>
          <MovieList/>
        </div>
        <div class="floater"></div>
        <Footer/>
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
import Footer from '@/components/home/Footer.vue'
// import HomeReviewList from '@/components/HomeReviewList.vue'
// import HomeCommentList from '@/components/HomeCommentList.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    RecentTrailerPlayer,
    MovieList,
    Footer,
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
.floater {
  height: 100px;
}
</style>