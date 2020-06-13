<template>
  <div>
    <!-- 상영, 개봉예정 -->

    안뇽
    {{upcomingMovies}}

    <!-- 추천, 최신작 -->



  </div>
</template>

<script>
// import MovieCarousel from '@/components/MovieList/MovieCarousel.vue'
import axios from 'axios'
import SERVER from '@/api/djangoAPI'

export default {
  name: "MovieList",
  components: {
    // MovieCarousel,
  },
  data() {
    return{
      upcomingMovies: null,
    }
  },
  methods: {
    // async getMovies(movieType) {
    //   console.log(SERVER.URL + SERVER.ROUTES.getMovies + movieType, '영화리스트 받는 주소')
    //   const res = await axios.get(SERVER.URL + SERVER.ROUTES.getMovies)
    //   console.log(res,'영화리스트1')
    //   return res.data[0]
    // },
    getMovies(movieType) {
      console.log(SERVER.URL + SERVER.ROUTES.getMovies + movieType, '영화리스트 받는 주소')
      axios.get(SERVER.URL + SERVER.ROUTES.getMovies)
      .then(res => {
        console.log(res,'getmovie')
        return res
      }).catch(err => console.error(err))
    },
  },
  mounted() {
    // this.getMovies('upcoming/').then(res => {
      //   this.upcommingMovies = res
    // })
    console.log('1')
    this.upcomingMovies = this.getMovies('upcoming/')
    console.log('2')
    // nowplayingMovies() {},
    // latestMovies() {},
    // recommendedMovies() {},
  },
}
</script>

<style>

</style>