import Vue from 'vue'
import Vuex from 'vuex'
import notifications from "./modules/notifications";
import pictures from "./modules/photo";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    notifications,
    pictures,
  }
})
