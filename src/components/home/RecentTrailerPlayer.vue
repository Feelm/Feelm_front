<template>
  <div class="iframebox d-block" v-if="$store.state.videoId">
    <iframe 
        :src="videoURL" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        onload="doResize()" width="100%" height="100%"
        allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "RecentTrailerPlayer",
    computed: {
        videoURL() {
            console.log("https://www.youtube.com/embed/" + this.$store.state.videoId)
            return "https://www.youtube.com/embed/" + this.$store.state.videoId
        }
    },
    methods: {
        ...mapActions(['getVideoId'])
    },
    created() {
        this.getVideoId()
    }
}
</script>

<style>
    .iframebox {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
    }
    .iframebox iframe {
        position: absolute;
    }
</style>