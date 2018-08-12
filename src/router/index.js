import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'
import { sync } from 'vuex-router-sync'


Vue.use(VueRouter)

const Router = new VueRouter({
  mode:'history',
  routes
})

sync(store, Router)

/*
Router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    //CheckAuth
    console.log("TODO: retrieve Storetoken")
    //TODO Security cyclus for Tokenretrieval
    if(!store.state.Auth.authorisiert){
      //TODO LOGIN
    }else{
      next();
    }
  }
})
*/




export default Router
