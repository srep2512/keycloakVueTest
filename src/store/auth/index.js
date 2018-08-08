import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutation'


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}