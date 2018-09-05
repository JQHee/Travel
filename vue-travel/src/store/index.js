import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 单项数据流
/* 数据流动 actions 可省略
dispatch
1.vue -> actions ->  mutations -> state
commit
1.vue->  mutations -> state
module 对state actions mutations进行拆分管理
*/
export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
})
