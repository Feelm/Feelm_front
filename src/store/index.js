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
    videoData: null,
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
      console.log('userinfo 저장')
    },
    set_video(state, res){
      console.log('트레일러세팅', res)
      state.videoId = res.id
      state.videoData = res.movieData
    },
  },
  actions: {
    postAuthData({ commit }, info) {
      console.log(SERVER.URL + info.location, info.data,)
      axios.post(SERVER.URL + info.location, info.data,).then(res=>{
        commit('SET_TOKEN', res.data.key)
        console.log('post auth 작업 성공')
      }).catch(err=>console.log(err.response))

    },
    postData({ commit },info) {
      console.log(SERVER.URL + info.location, info.data, info.header)
      axios.post(SERVER.URL + info.location, info.data, info.header).then(res=>{
        console.log(res,'post data 작업 성공')
        commit()
      }).catch(err=>console.log(err.response))
    },
    login({ dispatch }, loginData) {
      // console.log(this.getters.isLoggedIn, '로그인확인')
      const info = {
        data: loginData,
        location: SERVER.ROUTES.login,
        header: null,
      }
       return dispatch('postAuthData', info)
    },
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: SERVER.ROUTES.signup,
        header: null,
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
    // async authInfo({commit }, k) {
    //   const resKey = await k
    authInfo({ commit }) {
      // token = cookies.get('auth-token')
      // console.log(resKey, 'res')
      const customHeader= {headers: {Authorization: `Token ${cookies.get('auth-token')}`} }
      // console.log(customHeader, '커스텀헤더')
      console.log(SERVER.URL + SERVER.ROUTES.authInfo, customHeader)
      axios.get(SERVER.URL + SERVER.ROUTES.authInfo, customHeader).then(res=>{
        commit('set_userInfo', res.data)
        console.log(res, '유저정보')
      }).catch(err=>console.log(err.response,'유저정보실패이유'))
    },
    async getVideoId({commit}) {
      console.log(111111111111)
      // const movieRes = await axios.get(SERVER.URL + SERVER.ROUTES.getTrailer)
      // console.log(SERVER.URL + SERVER.ROUTES.getTrailer, movieRes)
      // const youtubeRes = await axios.get(GOOGLE.URL + GOOGLE.ROUTES.search, {
      // params: {
      //   key: GOOGLE.KEY,
      //   part: 'snippet',
      //   type: 'video',
      //   // q: 'deadpool trailer',
      //   q: movieRes.data.title +'trailer',
      //   maxResults: 1,
      // }})
      // commit('set_video', youtubeRes.data.items[0].id.videoId, movieRes.data)
      axios.get(SERVER.URL + SERVER.ROUTES.getTrailer).then(res1=>{
        console.log(SERVER.URL + SERVER.ROUTES.getTrailer, res1)
        axios.get(GOOGLE.URL + GOOGLE.ROUTES.search, {
          params: {
            key: GOOGLE.KEY,
            part: 'snippet',
            type: 'video',
            // q: 'deadpool trailer',
            q: res1.data.title +'trailer',
            maxResults: 1,
        }}).then(res2=>{
          const res = {
            id: res2.data.items[0].id.videoId,
            movieData: res1.data
          }
          commit('set_video', res)
        }).catch(err=>console.log(err))
        // console.log(movie, '무비')
      }).catch(err=>console.log(err))
    },
    postPoint({ dispatch }, inputData) {
      // 여기고쳐!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! // 다고침
      const info = {
        data: {
          body: {
            pointed_movie: `${inputData.id}`,
            // pointing_user: this.state.userInfo.id,
            pointing_user: `${this.state.userInfo.id}`,
            star_point: `${inputData.rating}`,
          }
        },
        location: SERVER.ROUTES.getMovies+inputData.id+SERVER.ROUTES.postPoint,
        header: {headers: {Authorization: `Token ${cookies.get('auth-token')}`} },
      }
      dispatch('postData', info)
    },
    test({dispatch}) {
      console.log(this.state.userInfo)
      return dispatch('authInfo')
    }
  },
  modules: {
  },
})
