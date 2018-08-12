<template>
  <v-app>
    
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="login">
       Button
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import {isLoggedIn} from './utils/auth'

export default {   
  methods:{
    login(){
      this.$store.dispatch('Auth/authLogin',true)
      .then(()=>{
        this.$router.push('/')
      })
    }
  }
}
</script>
