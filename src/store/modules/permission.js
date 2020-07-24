import Cookie from "cookie_js"
import { defultRouterMap, asyncRouterMap } from "@/router/index"
const state = {
    roles: [],
    allRouters: defultRouterMap,
    addRouters: []
}

const getters = {
    roles: state => state.roles,
    allRouters: state => state.allRouters, //所有的路由
    addRouters: state => state.addRouters //新增加的路由
}

const actions = {
    //获取用户角色
    getRoles({ commit }) {
        return new Promise((resolve, reject) => {
            commit("SET_ROLES", ["admin"])
            resolve(["admin"])
        })
    },
    //创建动态路由
    createRouter({ commit }, data) {
        return new Promise((resolve, reject) => {
            let roles = data
            const addRouters = asyncRouterMap.filter((item) => {
                    console.log(item);
                    if (roles.includes(item.meta.system)) {
                        return item
                    }
                })
                //将默认路由和过滤后的动态路由合并，更新路由
            commit("SET_ROUTER", addRouters)
            resolve()
        })
    }
}

const mutations = {
    SET_ROLES(state, value) {
        state.roles = value
        console.log(state.roles);
    },
    SET_ROUTER(state, router) {
        state.addRouters = router
        state.allRouters = defultRouterMap.concat(router)
        console.log(state.addRouters, state.allRouters);
    }

}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}