<template>
  <div>
    <v-app-bar
      color="secondary"
      dark
      
    >
      

      <v-toolbar-title >로고넣을곳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="drawer = true">mdi-account</v-icon>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      width="400"
      class="container"
    >
      <div v-if="isLoggedIn">
        <button @click="logout">로그아웃</button>
        <button @click="test">test</button>
        
        <div v-if="!!userInfo">
          로그인댐
          <!-- <button @click="authInfo">정보가져와</button> -->
          <p>이름 : {{userInfo.name}}</p>
          <p>나이 : {{userInfo.age}}</p>
          <p>성별 : {{userInfo.sex===0?'남자':'여자'}}</p>
          <!-- <p>{{userInfo}}</p> -->
        </div>
      </div>
      <div v-else>
        <AccountForm/>
      </div>
        
    </v-navigation-drawer>
  </div>
</template>

<script>
import AccountForm from './AccountForm'
import { mapActions } from 'vuex'

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
    }
  },
  methods: {
    ...mapActions(['logout']),
    ...mapActions(['authInfo']),
    ...mapActions(['test'])
  },
  // updated() {
  //   if (this.isLoggedIn) this.authInfo()
  // }

}
</script>

<style>

</style>