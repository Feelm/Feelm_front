<template>
  <div>
    <v-app-bar
      color="black"
      dark
      style="position: fixed; z-index: 100;"
    >
      

      <v-toolbar-title ><img src="@/assets/feelm/feelm_logo_letter_shadow.png" alt="" class="mt-5 navbarLogo"  @click="goHome"></v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-5" @click="$router.push('/board/free/')">자유게시판</span>
      <span class="mr-5" @click="$router.push('/board/request/')">요청게시판</span>
      <v-icon @click="drawer = true">mdi-account</v-icon>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
      width="400"
      class=""
      style="z-index: 101; background-color: rgb(251,251,251,1)"
      
    >
      <div v-if="isLoggedIn">
        <div>
          <v-app-bar color="grey darken-3 accent-4" dense dark>

            <v-toolbar-title>My Profile</v-toolbar-title>

            <v-spacer></v-spacer>

        
          </v-app-bar>
        </div>
        <div class="container">
          <!-- <button @click="signOut">회원탈퇴</button> -->
          <!-- <button @click="test">test</button> -->
          
          <div v-if="!!userInfo">
            <!-- <button @click="authInfo">정보가져와</button> -->
            <p style="font-size: 20px">{{userInfo.name}} 님 어서오세요 <i class="fas fa-sign-out-alt" style="color: rgb(255,50,50,1); font-size: 20px" @click="logout"></i></p>
            <p>마지막 로그인 : {{$moment(this.userInfo.last_login, "YYYYMMDD").fromNow()}}<p/>
            <p>나이 : {{userInfo.age}}</p>


            <p>성별 : {{userInfo.sex===0?'남자':'여자'}}</p>
            <p>e-mail : {{userInfo.email}}</p>
            
            <!-- <p>{{userInfo}}<p/> -->
            <!-- <p>{{userInfo}}</p> -->
          </div>
        </div>
      </div>
      <div v-else class="container">
        <AccountForm/>
      </div>
        
    </v-navigation-drawer>
  </div>
</template>

<script>
import AccountForm from './AccountForm'
import { mapActions } from 'vuex'
import SERVER from '@/api/djangoAPI'
import axios from 'axios'

export default {
  name: "Account",
  components: {
    AccountForm
  },
  data() {
    return {
      drawer: false,
      // isLoggedIn: this.$store.getters.isLoggedIn,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    userInfo() {
      return this.$store.state.userInfo
    },
    lastLogin() {
      return this.$moment((this.$moment()-this.userInfo.date_joined)).format('MMMM Do YYYY')
    }
  },
  methods: {
    ...mapActions(['logout']),
    ...mapActions(['authInfo']),
    ...mapActions(['test']),
    goHome() {
      this.$router.push('/')
    },
    signOut() {
      console.log(this.userInfo.id,'idididididiidi')
      const info = {
        location: `/accounts/withdraw/${this.userInfo.id}/`,
        header: {headers: {Authorization: `Token ${this.$cookies.get('auth-token')}`} },
      }
      axios.get(SERVER.URL + info.location, info.header).then(res=>{
        this.logout(res)
      }).catch(err=>console.log(err.response))
    }
  },
  // updated() {
  //   if (this.isLoggedIn) this.authInfo()
  // }

}
</script>

<style>
.navbarLogo {
  height: 60px;
  cursor: pointer;
}
.fa-sign-out-alt:hover {
  cursor: pointer;
}
</style>