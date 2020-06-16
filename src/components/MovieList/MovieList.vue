<template>
  <div>
    <!-- 상영, 개봉예정 -->
    <h1>현재 상영 영화</h1>
    <MovieCarousel :movies="nowplayingMovies"/>
    <h1>개봉 예정 영화</h1>
    <MovieCarousel :movies="upcomingMovies"/>
    <h1>최근 개봉 영화</h1>
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