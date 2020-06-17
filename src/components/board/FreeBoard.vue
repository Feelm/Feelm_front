<template>
  <div>
    <table class="table">
      <thead>
        <tr class='row'>
          <th class="col-1">#</th>
          <th class="col-5">제목</th>
          <th class="col-2">작성자</th>
          <th class="col-1">추천</th>
          <th class="col-1">조회수</th>
          <th class="col-2">작성시간</th>
        </tr>
      </thead>
      <tbody>
        <FreeBoardEach v-for="board in boardList" :key="board.id" :board="board" />
      </tbody>
    </table>
  </div>
</template>

<script>
import FreeBoardEach from '@/components/board/FreeBoardEach.vue'

export default {
  name: 'FreeBoard',
  props: {
    boardList: {
      type : Array,
    }
  },
  methods: {
    
  },
  components :{
    FreeBoardEach,
  },
}
</script>

<style>

</style>