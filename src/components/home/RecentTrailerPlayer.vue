<template>
  <div class="iframebox d-block" v-if="$store.state.videoId">
    <iframe 
        :src="videoURL+'?autoplay=1&loop=1&fs=0&disablekb=1&modestbranding=1&showinfo=0&controls=0'" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        onload="doResize()" width="100%" height="100%"
        allowfullscreen
    ></iframe>
    <div class="backscreen">
    <div class="row backscreenrow">
        <div class="col-6"></div>
        <div class="col-6"></div>
    </div>
    </div>
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
    .backscreen {
        position: absolute;
        width: 100%;
        /* padding-bottom: 56.25%; */
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        
    }
    .backscreenrow{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>