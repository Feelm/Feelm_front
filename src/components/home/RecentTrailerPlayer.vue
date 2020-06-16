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
        background-color: rgba(0, 0, 0, 0.4);
        
    }
    .backscreenrow{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .title1 {
        text-align: center;
        color: white;
        font-size: 100px;
        font-family: 'Times New Roman', Times, serif;
    }
    .content1 {
        color: rgba(200,200,200,0.5);
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .leftside {
        width: 200px;
    }
</style>