<template>
  <div>
    <tr class='row' data-toggle="collapse" :data-target="'#collapse'+board.id" aria-expanded="false" aria-controls="collapseExample">
      <th class='col-1'>{{board.id}}</th>
      <td class="col-5 text-left">{{board.title}}</td>
      <td class="col-2">{{board.user}}</td>
      <td class="col-1">{{board.like}}</td>
      <td class="col-1">{{board.view_count}}</td>
      <td class="col-2">{{displayTime}}</td>
    </tr>
    <div class="collapse col-12" :id="'collapse'+board.id">
      <div class="card card-body custom_collapse">
        <div>
          {{board.content}}
        </div>
        <div class="row_height row">
          <p class="col-1 btn" @click="recommend()">👍</p>
          <p class="col-1 offset-10 btn" @click="deleteFree()">삭제</p>
        </div>
        <br>
      </div>
    </div>
  </div>

</template>

<script>
import SERVER from '@/api/djangoAPI'
import axios from 'axios'
import { formatDistance } from 'date-fns'
import { ko } from 'date-fns/locale/'

export default {
  name: 'FreeBoardEach',
  props: {
    board: {
      type : Object,
    }
  },
  methods : {
    // moveDetail(reviewPk){
    //   this.$router.push(`/board/free/${reviewPk}`)
    // },
    deleteFree(){
      const freePk = this.board.id
      const url = SERVER.URL+SERVER.ROUTES.boards
      const elseUrl = SERVER.ROUTES.free+`${freePk}`
      const info = {
        location : url,
        data : null,
        header : {
          headers: {
            Authorization: `Token ${this.$cookies.get('auth-token')}`,
          }
        }
      }
      console.log(info)
      axios.delete(url+elseUrl,info.header)
        .then(res => {
          console.log(res.data)
          this.$router.go(this.$router.currentRoute)
        })
        .catch( err => console.log(err.response))
    },
    recommend(){
      const freePk = this.board.id
      const url = SERVER.URL+SERVER.ROUTES.boards
      const elseUrl = SERVER.ROUTES.free+`${freePk}/like/`
      const info = {
        location : url,
        data : null,
        header : {
          headers: {
            Authorization: `Token ${this.$cookies.get('auth-token')}`,
          }
        }
      }
      console.log(info)
      axios.post(url+elseUrl,info.data,info.header)
        .then(res => {
          console.log(res.data)
          this.$router.go(this.$router.currentRoute)
        })
        .catch( err => console.log(err.response))
    }
  },
  computed: {
    displayTime(){
      if(this.board.created_at === this.board.updated_at){
        return formatDistance( new Date(this?.board?.created_at),new Date(),{
            includeSeconds: true,
            addSuffix: true,
            locale : ko,
          })
      } else {
        return `${formatDistance( new Date(this?.board?.updated_at),new Date(),{
            includeSeconds: true,
            addSuffix: true,
            locale : ko,
          })} 수정`
      }
    }
  }
}
</script>

<style>
.custom_collapse {
  background-color: rgba(255,255,255,0.3) !important;
  min-height: 100px;
}
.row_height {
  max-height: 8px
}
</style>