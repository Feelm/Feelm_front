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