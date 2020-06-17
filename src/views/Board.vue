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
        <div class='container boards text-center'>
          <h1 v-if="boardType==='request'">영화 요청 게시판</h1>
          <h1 v-else-if="boardType==='free'">자유 게시판</h1>
          <br>
          <p @click="newBoard(boardType)" class='btn btn-secondary text-right mx-5'>글쓰기</p>
          
          <ListBoard v-if="boardType==='request'" :boardList="boardList" />
          <FreeBoard v-else-if="boardType==='free'" :boardList="boardList" />
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
import FreeBoard from '../components/board/FreeBoard.vue'
export default {
  name: "MovieDetail",
  data() {
    return {
      boardList: null,
      boardType: null
    }
  },
  components: {
    NavBar,
    ListBoard,
    FreeBoard,
  },
  methods : {
    getBoardList(){
      const boardType = this.$route.params.boardType
      this.boardType = boardType
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
    },
    newBoard(boardType){
      if (boardType==='request'){
        // this.$router.push({})
        console.log(1111111111111)
      }else if (boardType==='free'){
        this.$router.push({name:"FreeCreate"})
      }
    }
  },
  mounted(){
    this.getBoardList()
  },
}


</script>

<style scoped>
.boards{
  color : #e4e4e4;
}
</style>