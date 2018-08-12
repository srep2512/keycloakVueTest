export const setAuth = (state,authstate)=>{
    state.authorisiert = authstate.authenticated    
}

export const setKeyCloak = (state,authstate)=>{
    state.keyCloak = authstate   
}

