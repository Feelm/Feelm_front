<template>
  <!-- <v-app id="inspire">
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
      width="100%"
    >
    <div id="account">
      <Account/>
    </div>
    
      
    </v-card>
  </v-app> -->
  <div id="account">
    <Account/>
  </div>
</template>

<script>
  import Account from '../account/Account.vue'

  export default {
    name: "NavBar",
    components: {
      Account,
    },
    data: () => ({
    }),
    methods: {
    },
    computed: {
    },
  }
</script>



<style>

</style>