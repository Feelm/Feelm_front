<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-if="is_admin" scope="col" >check</th>
          <th scope="col">#</th>
          <th scope="col">영화</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardList" :key="board.id" :class="'tr_check_'+board.check">
          <th v-if="is_admin" scope="row" ><input :class="'input'+board.id" @click="movieRequest(board.movie_id,board.id)" type="checkbox" :checked="board.check"></th>
          <th scope="row">{{board.id}}</th>
          <td>{{board.movie_name}}</td>
          <td>{{board.title}}</td>
          <td>{{board.user}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'

export default {
 name: 'ListBoard',
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