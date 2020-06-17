<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover>

      <v-carousel-item v-for="movies in movieSet" :key="movies[0].id" class="">
        <div class="netflix">
          <a v-for="movie in movies" :key="movie.id" class="m-auto d-flex align-items-center justify-content-center carousela">
            <!-- <div class="img">
            <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="">
            <star-rating :rating="movie.vote_average/2" :round-start-rating="false"></star-rating>
            </div> -->
            <CarouselItem :movie="movie" />
            {{movies.star}}
          </a>
        </div>

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue'

export default {
  name: "MovieCarousel",
  props: [
    'movies',
  ],
  components: {
    CarouselItem,
  },
  data() {
    return {
    }
  },
  computed: {
    movieSet() {
      var array = [this?.movies?.slice(0,5),this?.movies?.slice(5)]
      return array
    }
  }
}
</script>

<style>
.netflix {
  display: flex;
  margin-top: 50px;
}
/* 
.item {
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  background-color: gray;
}
 */


/* .item:focus ~ .item,
.item:hover ~ .item {
  display: none;
} */

/* .container .item:focus,
.container .item:hover {
  transform: scale(1.5);
  z-index: 1;
} */
.carousela:hover
  .item {
    transform: translateX(-25%);
  }
.carousela:hover
  .item:hover {
    transform: scale(1.3);
  }
.carousela:hover
  .item:hover ~ div {
    transform: translateX(50%);
  }


body {
  overflow: hidden;
}
</style>