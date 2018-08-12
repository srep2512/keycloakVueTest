export const checkStore = (state) =>{
    console.log("checkStore Action triggered");
    //state.commit('setAuth');
}

export const setAuthLogin= (state,auth) =>{   
    state.commit('setAuth',auth);    
}

export const setKeyCloak= (state,auth) =>{   
    state.commit('setKeyCloak',auth);    
}