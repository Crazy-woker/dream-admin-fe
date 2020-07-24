import { setToken, setUserName, removeToken } from "@/utils/app"
import Cookie from "cookie_js"
const state = {
    token: "",
    userName: "",

}
const getters = {

}
const actions = {
    login({ commit }, requestData) {
        let data = requestData
        commit("SEND_TOKEN", data.token)
        commit("SEND_USERNAME", data.userName)
        setToken(data.token)
        setUserName(data.userName)
    },
    exit({ commit }) {
        removeToken()
        commit("SEND_TOKEN", "")
    }
}

const mutations = {
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