export const checkStore = (state) =>{
    console.log("checkStore Action triggered");
    //state.commit('setAuth');
}

export const authLogin= (state,auth) =>{
    console.log("authLogin"+auth);
    state.commit('setAuth',auth);
}