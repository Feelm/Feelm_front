<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover>

      <v-carousel-item v-for="movies in movieSet" :key="movies[0].id" class="">
        <div class="netflix">
          <a v-for="movie in movies" :key="movie.id" class="item">
            <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="">
            <div>
              <star-rating>
              </star-rating>
            </div>
            <!-- <CarouselItem :movie="movie" /> -->
          </a>
        </div>

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// import CarouselItem from './CarouselItem.vue'

export default {
  name: "MovieCarousel",
  props: [
    'movies',
  ],
  components: {
    // CarouselItem,
  },
  data() {
    return {
    }
  },
  computed: {
    movieSet() {
      var array = [this?.movies?.slice(0,5),this?.movies?.slice(5)];
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

.item {
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  /* background-color: gray; */
}

.container:focus-within .item,
.container:hover .item {
  transform: translateX(-25%);
}

.item:focus ~ .item,
.item:hover ~ .item {
  transform: translateX(25%);
}

.item:focus ~ .item img,
.item:hover ~ .item img {
  display: none;
}

/* .item:focus ~ .item,
.item:hover ~ .item {
  display: none;
} */

.container .item:focus,
.container .item:hover {
  transform: scale(1.5);
  z-index: 1;
}

body {
  overflow: hidden;
}

.item img {
  display: block;
  margin: auto;
  max-width: 100%;
}
</style>