<template>
  <div class="home">
    <v-app id="inspire">
      <v-card
        class="mx-auto overflow-hidden"
        height="300%"
        width="100%"
      >
        <NavBar/>

        <RecentTrailerPlayer/>
      </v-card>
    </v-app>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/home/NavBar.vue'
import RecentTrailerPlayer from '@/components/home/RecentTrailerPlayer.vue'
// import MovieCarousel from '@/components/MovieCarousel.vue'
// import HomeReviewList from '@/components/HomeReviewList.vue'
// import HomeCommentList from '@/components/HomeCommentList.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    RecentTrailerPlayer,
    // MovieCarousel,
    // ReviewList,
    // CommentList,
  }
}
</script>
