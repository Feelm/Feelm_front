<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">추천</th>
          <th scope="col">조회수</th>
          <th scope="col">작성시간</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardList" :key="board.id">
          <th scope="row">{{board.id}}</th>
          <td>{{board.title}}</td>
          <td>{{board.user}}</td>
          <td>{{board.like}}</td>
          <td>{{board.view_count}}</td>
          <td>{{board.created_at}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'

export default {
 name: 'FreeBoard',
 props: {
   boardList: {
     type : Array,
   }
 },
 methods: {
   movieRequest(movie_id,request_id){
     const url= SERVER.URL+SERVER.ROUTES.getMovies+movie_id+'/'
     const checkUrl = SERVER.URL + SERVER.ROUTES.boards+SERVER.ROUTES.requests
     axios.post(url)
      .then( res => {
        console.log(res.data)
        axios.put(checkUrl,{'request_id':request_id},null)
          .then(res2 => {
            console.log(res2.data)
            const tr = document.querySelector(`.input${request_id}`)
            tr.parentElement.parentElement.className= `tr_check_true`
          })
          .catch( err2 => console.log(err2.response))
      })
      .catch( err => console.log(err.response))
   },
 },

 computed: {
   is_admin(){
     return this?.$store?.state?.userInfo?.is_superuser
   },
 },
}
</script>

<style scoped>
  .tr_check_true{
    text-decoration: line-through;
  }
</style>