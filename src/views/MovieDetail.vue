
<template>
  <div class="home">
    <v-app id="inspire">
      <v-card
        class="mx-auto overflow-hidden main"
        height="300%"
        width="100%"
        color="rgba(0, 0, 0, 0.8)"
      >
        <NavBar/>
        <br><br>
        <div class="container p-0" style="position: relative;">
          <div class="imgbox">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" alt="" style="margin: 0; padding: 0;width: 100%;">
            <div class="gradient"></div>
          <div class="movie_info_box container">
            <!-- <p>{{movie}}</p> -->
            <div class="row">
              <div class="col-2 border-round">
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" style="max-width: 100%;">
              </div>
              <div class="col-10">
                <div class="movie_title">{{movie.title}}</div>
                <div class="row">
                  <div class="col-2">
                    <div class="text-secondary" v-if="movie.title!=movie.original_title">{{movie.original_title}}</div>
                    <div class="">{{movie.release_date}}</div>
                  </div>
                  <div class="col-2">
                    <!-- {{movie.star}} -->
                    <star-rating :rating="movie.star/2" :read-only="true" :round-start-rating="false" :star-size="40" class="star"></star-rating>
                  </div>
                </div>
                <div class="">
                  <i class="fas fa-heart" style="color: rgb(255,0,0,0.5); font-size:"></i>
                  {{movie.popularity}}
                </div>
                <br>
                <div class="">{{movie.overview}}</div>
              </div>
            </div>
            <div class="container">
              <hr>
              <div v-for="review in reviews" :key="review.id" class="row reviewlist" @click="reviewDetail(review)" type="button" data-toggle="modal" data-target="#reviewModal">
                <div class="col-7">
                  {{review.title}}
                </div>
                <div class="col-3">
                  {{review.created_at}}
                </div>
                <div class="col-2">
                  {{review.user}}
                </div>
                <hr>
              </div>
            </div>
          </div>
        <!-- 모달파트 시작 -->

          
          
          <div v-if="modalReview != null" class="modal fade" id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel">{{this.modalReview.title}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body row">
                  <div class="col-6">
                    <p style="display: block">작성자 : {{this.modalReview.user}}</p>
                    {{modalReview.like}}
                    <i class="fas fa-heart" style="color: rgb(255,0,0,0.5); font-size:"></i>
                  </div>
                  <div class="col-6">
                    <p style="display: block; text-align: right;">조회수 : {{this.modalReview.view_count}}</p>
                    <p style="color: rgb(0,0,0,0.5); text-align: right;">{{this.modalReview.updated_at}}</p>
                  </div>
                  <p class="m-2">{{this.modalReview.content}}</p>
                </div>
                <div class="container">
                  <div v-for="comment in modalReview.comments" :key="comment.id">
                    <button class="btn-sm btn-danger d-inline">삭제</button>
                    <p class="d-inline"> {{comment.user}} : {{comment.content}}</p>
                  </div>
                  <br>
                  <input type="text" v-model="comment" style="border: solid; width: 60%; display: inline; margin: auto;">
                  <button type="button" class="btn btn-primary text-white display: inline; margin: auto;" @click="createComment(this.modalReview)">댓글 작성하기</button>
                </div>
              </div>
            </div>
          </div>
        <!-- 모달파트 끝 -->

        </div>

        <div class="floater"></div><div class="floater"></div><div class="floater"></div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          
        </div>
      </v-card>
    </v-app>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
  </div>
</template>
<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'
import NavBar from '@/components/home/NavBar.vue'
export default {
  name: "MovieDetail",
  components: {
    NavBar,
  },
  // props: ['movie'],
  data() {
    return {
      movie: null,
      reviews: null,
      modalReview: null,
      comment: null,
    }
  },
  methods: {
    reviewDetail(review) {
      axios.get(SERVER.URL + `/movies/${this.movie.id}/reviews/${review.id}/`).then(res=>{
        this.modalReview = res.data
      })
    },
    createComment(review) {
      const info = {
        data: {
          content: this.comment,
        },
        location: `/movies/${this.movie.id}/reviews/${review.id}/comments/`,
        header: {headers: {Authorization: `Token ${this.$cookies.get('auth-token')}`} },
      }
      axios.post(SERVER.URL + info.location, info.data, info.geader).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err.response))
    }
  },
  mounted() {
    axios.get(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}`).then(res=>{
      this.movie = res.data
    }).catch(err=>console.log(err.response))
    console.log(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}` + SERVER.ROUTES.reviews)
    axios.get(SERVER.URL + SERVER.ROUTES.getMovies + `${this.$route.params.movieId}` + SERVER.ROUTES.reviews).then(res=>{
      this.reviews = res.data
      console.log(res.data,11111111111)
    }).catch(err=>console.log(err.response))
    console.log(22222222222222)
  }
}

</script>

<style>
.imgbox {
  display: block;
  position: absolute;

  width: 100%;
}
.gradient {
  position: absolute;
  /* background-color: rgb(255,255,255,0.5); */
  background: linear-gradient(rgb(255,255,255,0), white);
  /* background-blend-mode:soft-light; */
  color: black;
  width: 100%;
  height: 100px;
  bottom: 0;
}
.movie_info_box {
  position: absolute;
  display: block;
  /* background: linear-gradient(rgb(255,255,255,0), white); */
  /* background-blend-mode:soft-light; */
  background-color: rgb(255,255,255,1);
  color: black;
  width: 100%;
}
.movie_title {
  font-size: 30px;
  font: bold;
}
.floater {
  height: 100px;
}
.reviewlist:hover {
  background-color: gray;
  cursor: pointer;
  transition: background-color 1s;
}
</style>