import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'
import axios from 'axios'
// import router from '@/router/index.js'
import SERVER from '@/api/djangoAPI'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: cookies.get('auth-token'),
  },
  getters: {
    // cookies.isKey('auth-token')에서 변경 => 토큰 변경상황마다 일일히 실행해줄 필요가 없다
    isLoggedIn: state => !!state.authToken,
    config: state => ({ headers: { Authorization: `Token ${state.authToken}` } })
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.authToken = token
      cookies.set('auth-token', token)
    },
  },
  actions: {
    postAuthData({ commit }, info) {
      console.log(SERVER.URL + info.location, 'info.data',info.data)
      console.log('test')
      axios.post(SERVER.URL + info.location, info.data)
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          // router.push({ name: 'About' })
          // router.go()
        })
        .catch(err => console.log(err.response.data))
    },
    login({ dispatch }, loginData) {
      // console.log(this.getters.isLoggedIn, '로그인확인')
      const info = {
        data: loginData,
        location: SERVER.ROUTES.login,
      }
      dispatch('postAuthData', info)
    },
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: SERVER.ROUTES.signup
      }
      dispatch('postAuthData', info)
    },
  },
  modules: {
  },
})
