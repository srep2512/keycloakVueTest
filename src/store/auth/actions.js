export const checkStore = (state) =>{
    console.log("checkStore Action triggered");
    state.commit('setAuth');
}