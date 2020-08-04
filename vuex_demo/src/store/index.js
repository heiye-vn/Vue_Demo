import Vue from 'vue'
import Vuex from 'vuex'

import productList from "./modules/productList";
import shoppingCart from "./modules/shoppingCart";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productList,
    shoppingCart
  }
})
