<template>
<div>
  <v-form 
    v-if="!isSignedUp"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
  <!-- 로그인 폼 -->
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
      @click="runLogin"
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

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="runSignup"
    >
      회원가입
    </v-btn>
  </v-form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "AccountForm",
  data: () => ({
    valid: true,
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
    name: '',
    age: null,
    sex: [
      '남자',
      '여자',
    ],
    select:'',
  }),
  methods: {
    ...mapActions(['signup']),
    ...mapActions(['login']),
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
      this.signup(signupData)
    },
    runLogin () {
      // console.log(this.$cookies.isKey('auth-token'))
      const loginData = {
        email: this.email,
        password: this.password,
      }
      this.login(loginData)
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
  }
}
</script>

<style>

</style>