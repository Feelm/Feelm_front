<template>
  <div class="item">
    <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="itemimg">
    <div class="starbox">
      <star-rating :rating="movie.vote_average/2" :round-start-rating="false" :star-size="20" class="star"></star-rating>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: [
    'movie',
  ],
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

/* .item:focus .itemimg,
.item:hover .itemimg {
  display: none;
  transition-delay: 2s;
} */

.starbox {
  display: none;
  position: absolute;
  left: auto;
  top: 95%;
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