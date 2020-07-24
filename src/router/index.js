import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
//布局路由
import layout from '../views/layout'
//项目管理
import projectInfo from "@/views/projectMange/projectInfo"
import saveMangement from "@/views/projectMange/saveMangement"
import calculation from "@/views/projectMange/calculation"
import single from "@/views/projectMange/single"
import subject from "@/views/projectMange/subject"
import jurisdiction from "@/views/projectMange/jurisdiction"
import allTenant from "@/views/projectMange/allTenant"
import myTenant from "@/views/projectMange/myTenant"
//同步中心
import addTask from "@/views/synchronization/addTask"
import dateSource from "@/views/synchronization/dateSource"
import meanwhile from "@/views/synchronization/meanwhile"

//解决路由重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {  
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)



//默认路由
export const defultRouterMap = [{
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/layout',
        name: 'layout',
        redirect: '/projectMange/projectInfo',
        component: layout,
        children: [{
                path: '/projectMange/projectInfo',
                name: 'projectInfo',
                component: projectInfo
            },
            {
                path: '/projectMange/saveMangement',
                name: 'saveMangement',
                component: saveMangement
            },
            {
                path: '/projectMange/calculation',
                name: 'calculation',
                component: calculation
            },
            {
                path: '/projectMange/single',
                name: 'single',
                component: single
            },
            {
                path: '/projectMange/subject',
                name: 'subject',
                component: subject
            },
            {
                path: '/projectMange/jurisdiction',
                name: 'jurisdiction',
                component: jurisdiction
            },
            {
                meta: {
                    system: "admin"
                },
                path: '/projectMange/allTenant',
                name: 'allTenant',
                component: allTenant
            },
            {
                meta: {
                    system: "nomal"
                },
                path: '/projectMange/myTenant',
                name: 'myTenant',
                component: myTenant
            },
        ]
    },

]


//动态路由
export const asyncRouterMap = [{
        meta: {
            system: "admin"
        },
        path: '/synchronization/addTask',
        name: 'addTask',
        component: addTask
    },
    {
        meta: {
            system: "admin"
        },
        path: '/synchronization/dateSource',
        name: 'dateSource',
        component: dateSource
    },
    {
        meta: {
            system: "nomal"
        },
        path: '/synchronization/meanwhile',
        name: 'meanwhile',
        component: meanwhile
    },
]

const router = new VueRouter({
    routes: defultRouterMap
})

export default router