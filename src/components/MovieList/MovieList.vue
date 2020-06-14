<template>
  <div>
    <!-- 상영, 개봉예정 -->
    <MovieCarousel v-if="true" :movies="nowplayingMovies"/>
    <MovieCarousel v-else :movies="upcomingMovies"/>
    
    <MovieCarousel :movies="latestMovies"/> 
    {{upcomingMovies}}

    <!-- 추천, 최신작 -->



  </div>
</template>

<script>
import MovieCarousel from '@/components/MovieList/MovieCarousel.vue'
import axios from 'axios'
import SERVER from '@/api/djangoAPI'
import { mapActions } from 'vuex'

export default {
  name: "MovieList",
  components: {
    MovieCarousel,
  },
  data() {
    return{
      upcomingMovies: null,
      nowplayingMovies: null,
      latestMovies: null,
      // recommendedMovies: null,
    }
  },
  methods: {
    ...mapActions(['getVideoId']),
    async getMovies() {
      console.log('영화리스트 가져와 !')
      const res1 = await axios.get(SERVER.URL + SERVER.ROUTES.getMovies + 'upcoming/')
      this.upcomingMovies = res1.data
      this.getVideoId(res1.data)
      const res2 = await axios.get(SERVER.URL + SERVER.ROUTES.getMovies + 'nowplaying/')
      this.nowplayingMovies = res2.data
      const res3 = await axios.get(SERVER.URL + SERVER.ROUTES.getMovies + 'recent/')
      this.latestMovies = res3.data
      
      // const res4 = await axios.get(SERVER.URL + SERVER.ROUTES.getMovies + 'recommended/' + this.$store.userInfo.id)
      // this.recommendedMovies = res4.data
    },
  },
  mounted() {
    this.getMovies()
  },
}
</script>

<style>

</style>