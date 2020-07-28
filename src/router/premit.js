//路由守卫
import router from './index'
import { getToken, removeToken } from "@/utils/app"
import store from "../store/index"
//路由守卫
const whiteRouter = ['/login']
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === "/login") {
            store.dispatch("app/exit")
            sessionStorage.clear();
            next()
        } else {
            if (store.getters["app/roles"].length === 0) {
                store.dispatch("permission/getRoles").then((res) => {
                    let role = res
                    store.commit("app/SET_ROLES", role)
                    store.dispatch("permission/createRouter", role).then((res) => {
                        let addRouters = store.getters["permission/addRouters"]
                        let allRouters = store.getters["permission/allRouters"]
                            //更新所有路由
                        router.options.routes = allRouters
                            //添加动态路由
                        router.addRoutes(addRouters)
                            //replace: true 不留路由记录
                        next({...to, replace: true })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        }
        next("/login")
    }
});