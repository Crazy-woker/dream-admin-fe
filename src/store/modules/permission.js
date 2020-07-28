import Cookie from "cookie_js"
import { defultRouterMap, asyncRouterMap } from "@/router/index"
const state = {
    allRouters: defultRouterMap,
    addRouters: []
}

const getters = {
    allRouters: state => state.allRouters, //所有的路由
    addRouters: state => state.addRouters //新增加的路由
}

const actions = {
    //获取用户角色
    getRoles({ commit }) {
        return new Promise((resolve, reject) => {
            resolve(["sale", "vip", "svip"])
        })
    },
    //创建动态路由
    createRouter({ commit }, data) {
        return new Promise((resolve, reject) => {
            let roles = data
                //判断管理员身份是否为超管,如果是超管直接赋予所有动态路由权限
            let addRouters = []
            if (roles.includes('admin')) {
                addRouters = asyncRouterMap
            } else {
                addRouters = asyncRouterMap.filter((item) => {
                    //处理一级路由权限
                    if (hasPermission(roles, item)) {
                        //处理二级路由权限
                        if (item.children && item.children.length > 0) {
                            item.children = item.children.filter(child => {
                                if (hasPermission(roles, child)) {
                                    if (child.children && child.children.length > 0) {
                                        child.children = child.children.filter(c => {
                                            if (hasPermission(roles, c)) {
                                                return c
                                            }
                                        })
                                        return item
                                    }
                                    return child
                                }
                            })
                            return item
                        }
                        return item
                    }
                })
            }
            //将默认路由和过滤后的动态路由合并，更新路由
            commit("SET_ROUTER", addRouters)
            resolve()
        })
    }
}

const mutations = {

        SET_ROUTER(state, router) {
            state.addRouters = router
            state.allRouters = defultRouterMap.concat(router)
        }

    }
    //匹配角色路由权限
function hasPermission(roles, router) {
    if (router.meta && router.meta.roles) {
        return roles.some(item => router.meta.roles.indexOf(item) >= 0)
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}