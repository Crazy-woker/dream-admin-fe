import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from "./modules/login"
import app from "./modules/app"
import permission from "./modules/permission"

export default new Vuex.Store({
    modules: {
        login,
        app,
        permission
    }
})