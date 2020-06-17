<template>
  <div class="iframebox d-block" v-if="$store.state.videoId">
    <iframe 
        :src="videoURL+`?autoplay=1&playlist=${this.$store.state.videoId}&loop=1&fs=0&disablekb=1&modestbranding=1&showinfo=0&controls=0`" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        onload="doResize()" width="100%" height="100%"
        allowfullscreen
    ></iframe>
    <div class="backscreen">
        
        <div class="row align-items-center backscreenrow">
            <div class="col-6 align-items-center leftside">
                <br>
                <div class="title1">
                    {{this.$store.state.videoData.title}}
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <star-rating :rating="$store.state.videoData.star/2" :read-only="true" :round-start-rating="false" :star-size="40" class="star text-white col-4"></star-rating>
                </div>
                <div class="content1 m-5">
                    {{this.$store.state.videoData.overview}}
                    <!-- {{this.$store.state.videoData.id}} -->

                </div>
                <!-- <div class="content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div> -->
            </div>
            <div class="col-6 align-items-center">
                <div class="content1">
                    <br><br><br><br><br><br><br>
                    <!-- {{this.$store.state.videoData.overview}} -->
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
    name: "RecentTrailerPlayer",
    computed: {
        videoURL() {
            console.log("https://www.youtube.com/embed/" + this.$store.state.videoId)
            return "https://www.youtube.com/embed/" + this.$store.state.videoId
        }
    },
    methods: {
        // ...mapActions(['getVideoId'])
    },
    created() {
        this.getVideoId()
    }
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/jejuhallasan.css);
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

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
        background-color: rgba(0, 0, 0, 0.3);
        
    }
    .backscreenrow{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .title1 {
        text-align: center;
        color: white;
        font-size: 70px;
        font-family: 'Jeju Hallasan', cursive;
    }
    .content1 {
        color: rgba(200,200,200,0.5);
        font-size: 20px;
        font-family: 'Jeju Myeongjo', serif;

    }
    .leftside {
        width: 200px;
    }
</style>