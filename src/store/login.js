import { userLogin } from '../api/login'

const state = {
  to_ken: '',
  pro_file: null,
}

const mutations = {
  SET_TOKEN(state, token) {
    state.to_ken = token
  },
  SET_PROFILE(state, data) {
    state.pro_file = data
  },
}

const actions = {
  //登录验证及保存用户信息
  verifyLogin({ commit }, data) {
    return new Promise((resolve, reject) => {
      userLogin(data)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            commit('SET_TOKEN', res.data.token)
            commit('SET_PROFILE', res.data.profile)
            resolve()
          } else {
            reject(res.status, res.statusText)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
