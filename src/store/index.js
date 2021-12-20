import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';

Vue.use(Vuex);

const userStore = new Vuex.Store({
  modules: {
    common
  }
});

export default userStore;
