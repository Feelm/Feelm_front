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
          <h1>글 쓰기</h1>
          <br>
          <div class="col-8 offset-2">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">제목</span>
              </div>
              <input v-model="FreeData.title" type="text" class="form-control input_create" aria-label="title" aria-describedby="basic-addon1">
            </div>
            <br>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">내용</span>
              </div>
              <textarea rows="15" v-model="FreeData.content" class="form-control input_create" aria-label="With textarea"></textarea>
            </div>
            <br>
            <p class='btn btn-secondary' @click="runFree">작성완료</p>
          </div>
        </div>

        
      </v-card>
    </v-app>
  </div>
</template>
<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'
import NavBar from '@/components/home/NavBar.vue'

export default {
  name: "FreeCreate",
  data() {
    return {
      FreeData: {
        title: null,
        content: null,
      }
    }
  },
  components: {
    NavBar,

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
    },
    runFree(){
      const url = SERVER.ROUTES.boards + SERVER.ROUTES.free
      const info = {
        location : url,
        data : this.FreeData,
        header : {
          headers: {
            Authorization: `Token ${this.$cookies.get('auth-token')}`,
          }
        }
      }
      axios.post(SERVER.URL + info.location, info.data, info.header)
        .then(res=>{
          console.log(res.data, '요청완료')
          this.$router.push('/board/free')
        })
        .catch(err=>console.log(err.response))

    },
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
.input_create{
  background-color: white;
}
</style>