import store from '../store'


export function requireAuth(to,from,next){
    console.log("Login")    
    var autorisiert = store.getters['Auth/getTest'];
    autorisiert ? next(): null;
}


export function isLoggedIn(){
    store.getters['Auth/']
    return true
}