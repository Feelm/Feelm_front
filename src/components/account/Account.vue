<template>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-toolbar-title>로고넣을곳</v-toolbar-title>
      <v-icon @click="drawer = true">mdi-account</v-icon>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      l1I|

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
        로그인댐
        이제 여기에 프로필 만들거
      </div>
      <div v-else>
        <AccountForm/>
      </div>
        
    </v-navigation-drawer>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import AccountForm from './AccountForm'

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
    }
  }
}
</script>

<style>

</style>