
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
        <br><br>
        <div class="container p-0" style="position: relative;">
          <div class="imgbox">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" alt="" style="margin: 0; padding: 0;width: 100%;">
            <div class="gradient"></div>
          <div class="movie_info_box container">
            <!-- <p>{{movie}}</p> -->
            <div class="row">
              <div class="col-2 border-round">
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" style="max-width: 100%;">
              </div>
              <div class="col-10">
                <div class="movie_title">{{movie.title}}</div>
                <div class="row">
                  <div class="col-2">
                    <div class="text-secondary" v-if="movie.title!=movie.original_title">{{movie.original_title}}</div>
                    <div class="">{{movie.release_date}}</div>
                  </div>
                  <div class="col-2">
                    <!-- {{movie.star}} -->
                    <star-rating :rating="movie.star/2" :read-only="true" :round-start-rating="false" :star-size="40" class="star"></star-rating>
                  </div>
                </div>
                <div class="">
                  <i class="fas fa-heart" style="color: rgb(255,0,0,0.5); font-size:"></i>
                  {{movie.popularity}}
                </div>
                <br>
                <div class="">{{movie.overview}}</div>
              </div>
            </div>
            <div class="container">
              <hr>
              <p v-for="review in reviews" :key="review.id">
                {{review}}
              </p>
              <br>
              <br>
            </div>
          </div>
        </div>
        <div class="floater"></div><div class="floater"></div><div class="floater"></div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          
        </div>
      </v-card>
    </v-app>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
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
  // props: ['movie'],
  data() {
    return {
      movie: null,
      reviews: null,
    }
  },
  mounted() {
    axios.get(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}`).then(res=>{
      this.movie = res.data
    }).catch(err=>console.log(err.response))
    console.log(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}` + SERVER.ROUTES.reviews)
    axios.get(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}` + SERVER.ROUTES.reviews).then(res=>{
      this.reviews = res.data
      console.log(res.data,11111111111)
    }).catch(err=>console.log(err.response))
    console.log(22222222222222)
  }
}

</script>

<style>
.imgbox {
  display: block;
  position: absolute;

  width: 100%;
}
.gradient {
  position: absolute;
  /* background-color: rgb(255,255,255,0.5); */
  background: linear-gradient(rgb(255,255,255,0), white);
  /* background-blend-mode:soft-light; */
  color: black;
  width: 100%;
  height: 100px;
  bottom: 0;
}
.movie_info_box {
  position: absolute;
  display: block;
  /* background: linear-gradient(rgb(255,255,255,0), white); */
  /* background-blend-mode:soft-light; */
  background-color: rgb(255,255,255,1);
  color: black;
  width: 100%;
}
.movie_title {
  font-size: 30px;
  font: bold;
}

.floater {
  height: 100px;
}
</style>