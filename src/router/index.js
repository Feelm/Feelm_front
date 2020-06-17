import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Board from '../views/Board.vue'
import FreeCreate from '../views/FreeCreate.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/board/:boardType',
    name: 'Board',
    component: Board,
  },
  {
    path: '/freeCreate',
    name: 'FreeCreate',
    component: FreeCreate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
