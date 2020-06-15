<template>
  <div class="item">
    <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="itemimg">
    <div class="starbox" @click="inputPoint">
      <h5>{{movie.title}}</h5>
      <star-rating :rating="movie.vote_average/2" v-model="rating" :round-start-rating="false" :star-size="20" class="star"></star-rating>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'CarouselItem',
  props: {
    movie: Object
  },
  data() {
    return {
      rating: this.movie.vote_average/2
    }
  },
  methods: {
    ...mapActions(['postPoint']),
    inputPoint() {
      const inputData = {
        rating: this.rating,
        id: this.movie.id,
      }
      this.postPoint(inputData)
    }
  }
}
</script>

<style>

.item {
  position: relative;
  display: block;
  flex: 1 1 0px;
  height: 100%;
  transition: transform 500ms;
  /* background-color: gray; */
}
/* 
.container:focus-within .item,
.container:hover .item {
  transform: translateX(-25%);
}

.item:focus ~ .item,
.item:hover ~ .item {
  transform: translateX(25%);
} */


.container .item:focus,
.container .item:hover {
  transform: scale(1.5);
  z-index: 1;
}

body {
  overflow: hidden;
}

.itemimg {
  display: block;
  /* transition: 0s display;
  transition-delay: 1s; */
  margin: auto;
  max-width: 100%;
  transition: display 500ms;
}

.item:focus .itemimg,
.item:hover .itemimg {
  opacity: 0.2;
}

.starbox {
  display: none;
  position: absolute;
  left: auto;
  top: 70%;
  left: 50%;
  transform: translate( -50%, -50% );
  /* max-width: 100%;
  height: 100%; */

}

.star {
  position: relative;
  top: 0;
}

.item:focus .starbox,
.item:hover .starbox {
  display: block;
}
/* .container:focus-within .item,
.container:hover .item {
  transform: translateX(-12.5%);
} */
</style>