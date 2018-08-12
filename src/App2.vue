<template>
  <v-app id="inspire" v-if="check">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat @click=route(item.route)>GO</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
            @click="route(item.route)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>          
        </template>
      </v-list>     
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Vobo&nbsp;<span class="text">Correction</span></span>      
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click=logout>LOGOUT</v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [  
        { divider: true }, 
        { icon: 'lightbulb_outline', text: 'Notes',route: 'Home' },  
        { divider: true },
        { icon: 'keyboard', text: 'Notes',route: 'notauth' },        
        { divider: true }                 
      ]
    }),
    props: {
      source: String
    },
    computed:{
        check(){
        return this.$store.getters['Auth/getTest']
        }
    },
    methods:{
        route(rou){
            this.$router.push(rou)
        },
        logout(){
            var key = this.$store.getters['Auth/getKeyCloak'];
            //var role = key.tokenParsed
            //console.log(role.realm_access.roles)
            key.logout();
        }
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .v-navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
</style>