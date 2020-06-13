<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item v-for="movies in movieSet" :key="movies[0].id" class="container">
        <div class="row">
          <span v-for="movie in movies" :key="movie.id" class="col-2. m-auto">
            <div class="d-inline">
              <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="w-100">
              
            </div>
          </span>
        </div>

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "MovieCarousel",
  props: [
    'movies',
  ],
  data() {
    return {
    }
  },
  computed: {
    movieSet() {
      var array = [this.movies.slice(0,5),this.movies.slice(5)];
      return array
    }
  }
}
</script>

<style>

</style>