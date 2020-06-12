<template>
  <v-app id="inspire">
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
      width="100%"
    >
      <v-app-bar
        color="deep-purple"
        dark
      >
        <v-toolbar-title>로고넣을곳</v-toolbar-title>
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
          로그인댐
        </div>
<!--   로그인 폼   -->
        <v-form 
          v-else-if="!isSignedUp"
          ref="form"
          v-model="valid"
          lazy-validation
          
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            로그인
          </v-btn>

          <v-btn
            color="warning"
            @click="isSignedUp = true"
          >
            회원가입
          </v-btn>
        </v-form>
<!-- 회원가입 폼 -->

        <v-form 
          v-else
          ref="form"
          v-model="valid"
          lazy-validation
          
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="비밀번호"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password2"
            :rules="password2Rules"
            label="비밀번호 확인"
            required
          ></v-text-field>

          <v-text-field
            v-model="name"
            label="이름"
            required
          ></v-text-field>

          <v-text-field
            v-model="age"
            label="나이"
            :rules="[v => !isNaN(v) || '숫자를 입력해주세요']"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="sex"
            :rules="[v => !!v || '성별을 선택해주세요']"
            label="성별"
            required
          ></v-select>
<!-- 
          <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
          ></v-checkbox> -->

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="runSignup"
          >
            회원가입
          </v-btn>

        </v-form>

      </v-navigation-drawer>
    </v-card>
  </v-app>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "NavBar",
    data: () => ({
      drawer: false,
      valid: true,
      isLoggedIn: false,
      isSignedUp: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail을 입력해주세요',
        v => /.+@.+\..+/.test(v) || '올바르지 않은 E-mail 형식입니다',
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요',
        v => (v && v.length >= 10) || '비밀번호는 10자 이상입니다',
      ],

      password2: '',
      // password2Rules: [
      //   v => !!v || '비밀번호를 다시한번 입력해주세요',

      //   // v => (v && v == this.password) || '동일한 비밀번호를 입력해주세요'
      //   function(v){
      //     return (v && v == password) || '동일한 비밀번호를 입력해주세요'
      //   }
      // ],
      

      name: '',
      age: null,
      sex: [
        '남자',
        '여자',
      ],
      // checkbox: false,
      select:'',
    }),
    methods: {
      ...mapActions(['signup']),
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      runSignup () {
        const signupData = {
          email: this.email,
          password1: this.password,
          password2: this.password2,
          name: this.name,
          age: this.age,
          sex: this.select,
        }
        // console.log(signupData)
        this.signup(signupData)
      },
      
    },
    computed: {
      password2Rules() {
        if (this.password == this.password2 && !!this.password){
          return []
        }
        else { 
          return [
          v => !!v || '비밀번호를 다시한번 입력해주세요',
          v => (v && false) || '동일한 비밀번호를 입력해주세요'
        ]}
      },
      // wow() {
      //   if (this.password == this.password2) {
      //     this.resetValidation()
      //   }
      //   return null
      // }
    }
  }
</script>



<style>

</style>