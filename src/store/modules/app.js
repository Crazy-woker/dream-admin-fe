import { setToken, setUserName, removeToken } from "@/utils/app"
import Cookie from "cookie_js"
const state = {
    token: "",
    userName: "",
    roles: [],

}
const getters = {
    roles: state => state.roles,

}
const actions = {
    login({ commit }, requestData) {
        let data = requestData
        commit("SEND_TOKEN", data.token)
        commit("SEND_USERNAME", data.userName)
        setToken(data.token)
        setUserName(data.userName)
    },
    //退出登录清空数据
    exit({ commit }) {
        removeToken()
        commit("SEND_TOKEN", "")
    }
}

const mutations = {
    SET_ROLES(state, value) {
        state.roles = value
    },
    SEND_TOKEN(state, value) {
        state.token = value
    },
    SEND_USERNAME(state, value) {
        state.userName = value
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}