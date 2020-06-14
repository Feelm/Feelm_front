import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'
import axios from 'axios'
// import router from '@/router/index.js'
import SERVER from '@/api/djangoAPI'
import GOOGLE from '@/api/googleAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: cookies.get('auth-token'),
    userInfo: null,
    videoId: null,
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
      // console.log('쿠키설정성공')
    },
    set_userInfo(state, info){
      state.userInfo = info
    },
    set_videoId(state, videoId){
      // console.log('id세팅', videoId)
      state.videoId = videoId
    },
  },
  actions: {
    async postAuthData({ commit }, info) {
      console.log(SERVER.URL + info.location, info.data)
      const res = await axios.post(SERVER.URL + info.location)
      commit('SET_TOKEN', res.data.key)
      return res
        // .then(res => {
        //   console.log('로그인성공')
        //   commit('SET_TOKEN', res.data.key)
        //   return res.data.key
        // })
        // .catch(err => console.log(err.response.data))
        // // return cookies.get('auth-token')
    },
    login({ dispatch }, loginData) {
      // console.log(this.getters.isLoggedIn, '로그인확인')
      const info = {
        data: loginData,
        location: SERVER.ROUTES.login,
      }
       return dispatch('postAuthData', info)
    },
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: SERVER.ROUTES.signup
      }
      dispatch('postAuthData', info)
    },
    async logout({ getters, commit }) {
      await axios.post(SERVER.URL + SERVER.ROUTES.logout, null, getters.config)
      // console.log(res)
      commit('SET_TOKEN', null)  // state 에서도 삭제
      cookies.remove('auth-token')  // cookie 에서는 삭제
      this.state.userInfo = null // 유저 정보 삭제
    },
    async authInfo({commit }, k) {
      const resKey = await k
      // console.log(resKey, 'res')
      const customHeader= {headers: {Authorization: `Token ${resKey.data.key}`} }
      // console.log(customHeader, '커스텀헤더')
      const res = await axios.get(SERVER.URL + SERVER.ROUTES.authInfo, customHeader)
      // console.log(res)
      commit('set_userInfo', res.data)
    },
    async getVideoId({commit}, movie) {
      console.log(movie, 111111111111)
      // const movieRes = await axios.get(SERVER.URL + SERVER.ROUTES.getTrailer)
      const youtubeRes = await axios.get(GOOGLE.URL + GOOGLE.ROUTES.search, {
      params: {
        key: GOOGLE.KEY,
        part: 'snippet',
        type: 'video',
        q: 'deadpool trailer',
        // q: movie[0].title +'trailer',
        maxResults: 1,
      }})
      console.log(movie, '무비')
      commit('set_videoId', youtubeRes.data.items[0].id.videoId)
    }
  },
  modules: {
  },
})
