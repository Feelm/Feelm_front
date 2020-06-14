<template>
  <div class="citem">
    <img :src="'https://image.tmdb.org/t/p/w185' + this.movie.poster_path" alt="" class="">
    <div>
      <star-rating>
      </star-rating>
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
  /* .citem:focus ~ .citem,
  .citem:hover ~ .citem {
    display: none;
  } */
</style>