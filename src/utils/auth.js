import store from '../store'
import Keycloak from 'keycloak-js'

/*
let keycloakAuth = new Keycloak({
    "realm": "eLearning",
    "url": "https://api.brandt-projects.de/auth",
    "clientId":"eLearning_Login"  
});
*/
let keycloakAuth = new Keycloak({
    "realm": "demo",
    "url": "http://localhost:8080/auth",
    "clientId":"myvueapp"  
});


export function requireAuth(to,from,next){
    console.log("Login")    
    
    var autorisiert = store.getters['Auth/getTest'];
    if(!autorisiert){
        keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
      keycloakAuth.updateToken(10)
            .success(() => {
            console.log("Time to Set "+keycloakAuth.authenticated)
            store.dispatch('Auth/authLogin', keycloakAuth)
            next()         
            })
        })
        .error(() => {
        console.log('failed to login')
        })
    }else{
        next();
    }    
}


export function isLoggedIn(){
    store.getters['Auth/getTest']
    return true
}