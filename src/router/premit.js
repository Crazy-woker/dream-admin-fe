//路由守卫
import router from './index'
import { getToken, removeToken } from "@/utils/app"
import store from "../store/index"
//路由守卫
const whiteRouter = ['/login']
router.beforeEach((to, from, next) => {
    console.log(to);
    if (getToken()) {
        if (to.path === "/login") {
            removeToken()
            store.commit("SEND_TOKEN", "")
            sessionStorage.clear();
            next()
        } else {
            if (store.getters["permission/roles"].length === 0) {
                store.dispatch("permission/getRoles").then((res) => {
                    // console.log(res);
                    let role = res
                    store.dispatch("permission/createRouter", role).then((res) => {
                        let addRouters = store.getters["permission/addRouters"]
                        router.addRoutes(addRouters)
                        next({...to, replace: true })
                    })
                })
            } else {
                next()
            }
            // next()
        }
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        }
        next("/login")
    }
});