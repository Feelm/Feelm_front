<template>
  <div class="">
    <v-app id="inspire">
      <v-card
        class="mx-auto overflow-hidden main"
        height="300%"
        width="100%"
        color="rgba(0, 0, 0, 0.8)"
      >
        <NavBar/>
          <br><br><br>
        <div class='container text-center'>
          <h1>영화 요청 게시판</h1>
          <br>
          <ListBoard :boardList="boardList" />
        </div>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'
import NavBar from '@/components/home/NavBar.vue'
import ListBoard from '../components/board/ListBoard.vue'
export default {
  name: "MovieDetail",
  data() {
    return {
      boardList: null
    }
  },
  components: {
    NavBar,
    ListBoard,
  },
  methods : {
    getBoardList(){
      const boardType = this.$route.params.boardType
      const url = SERVER.URL+SERVER.ROUTES.boards
      let elseUrl = null
      if (boardType==='request'){
        elseUrl = SERVER.ROUTES.requests
      }else if (boardType==='free'){
        elseUrl = SERVER.ROUTES.free
      }
      axios.get(url+elseUrl)
        .then(res => {
          this.boardList= res.data
        })
        .catch( err => console.log(err.response))
    }
  },
  mounted(){
    this.getBoardList()
  },
}


</script>

<style>

</style>