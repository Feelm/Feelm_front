<template>
  <div class="item">
    <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="" class="itemimg">
    <star-rating :rating="movie.vote_average/2" :round-start-rating="false" :star-size="20"></star-rating>
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
  transition: transform 500ms;
  /* background-color: gray; */
}

.container:focus-within .item,
.container:hover .item {
  transform: translateX(-12.5%);
}

.item:focus ~ .item,
.item:hover ~ .item {
  transform: translateX(12.5%);
}



.container .item:focus,
.container .item:hover {
  transform: scale(1.3);
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

.itemimg:focus ~ .itemimg,
.itemimg:hover ~ .itemimg {
  display: none;
}
</style>