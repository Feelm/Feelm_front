<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/home/NavBar.vue'
// import RecentTrailerPlayer from '@/components/RecentTrailerPlayer.vue'
// import MovieCarousel from '@/components/MovieCarousel.vue'
// import HomeReviewList from '@/components/HomeReviewList.vue'
// import HomeCommentList from '@/components/HomeCommentList.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    // RecentTrailerPlayer,
    // MovieCarousel,
    // ReviewList,
    // CommentList,
  }
}
</script>
