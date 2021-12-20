
const TEMP_NAVS = [
  {
    title: '首页',
    url: '/'
  },
  {
    title: '解决方案',
    url: '/'
  },
  {
    title: '产品',
    url: '/product',
    subs: [
      { title: '产品1', url: '/' },
      { title: '产品2', url: '/' }
    ]
  },
  {
    title: '工业标识解析',
    url: '/'
  },
  {
    title: '应用超市',
    url: '/'
  },
  {
    title: '开发者中心',
    url: '/'
  },
  {
    title: '工业应用',
    url: '/'
  },
  {
    title: '移动专区',
    url: '/'
  }
];


const state = () => ({
  navs: []
});

const getters = {
  getNavs (state) {
    console.log('dddd', state);
    return state.navs;
  }
};

const mutations = {
  setNavs (state, value) {
    state.navs = value;
  }
};

const actions = {
  FETCH_NAVS ({ commit }, data) {
    console.log('tkyj++++', data);
    if (data.immediately) {
      commit('setNavs', TEMP_NAVS);
      return;
    }
    setTimeout(() => {
      console.log('tkyj++22++', data);
      commit('setNavs', TEMP_NAVS);
    }, 3000);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
