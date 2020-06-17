<template>
  <tr>
    <th scope="row">{{board.id}}</th>
      <td>{{board.title}}</td>
      <td>{{board.user}}</td>
      <td>{{board.like}}</td>
      <td>{{board.view_count}}</td>
      <td>{{displayTime}}
    </td>
  </tr>
</template>

<script>
import { formatDistance } from 'date-fns'
import { ko } from 'date-fns/locale/'

export default {
  name: 'FreeBoardEach',
  props: {
    board: {
      type : Object,
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
          })}수정`
      }
    }
  }
}
</script>

<style>

</style>