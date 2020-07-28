import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
//布局路由
import layout from '../views/layout'
import console from "../views/console"
import threeRouter from "@/views/threeRouter"
//项目管理
import projectInfo from "@/views/projectMange/projectConfig/projectInfo"
import saveMangement from "@/views/projectMange/resources/saveMangement"
import calculation from "@/views/projectMange/resources/calculation"
import single from "@/views/projectMange/jurisdiction/single"
import subject from "@/views/projectMange/jurisdiction/subject"
import jurisdiction from "@/views/projectMange/jurisdiction/jurisdiction"
import allTenant from "@/views/projectMange/tenant/allTenant"
import myTenant from "@/views/projectMange/tenant/myTenant"
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


//系统分配
//角色分配
//前端配置路由进行处理

//默认路由
export const defultRouterMap = [{
        path: '/',
        redirect: 'login',
        hidden: true,
        meta: {
            name: "首页"
        },
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        meta: {
            name: "登录"
        },
        component: login
    },
    {
        path: '/console',
        name: 'console',
        hidden: true,
        meta: {
            name: "控制台"
        },
        component: layout,
        redirect: '/projectMange/projectInfo',
        children: [{
            path: '/index',
            name: 'index',
            meta: {
                name: "首页"
            },
            component: console
        }, ]
    },
    //项目管理
    {
        path: '/projectMange',
        name: 'projectMange',
        redirect: '/projectMange/projectInfo',
        hidden: false,
        meta: {
            name: "项目管理",
            //控制顶部导航条高亮
            activeMenu: "/projectMange"
        },
        component: layout,
        children: [{
                path: '/projectConfig',
                name: 'projectConfig',
                //是否为单个菜单
                singleType: false,
                meta: {
                    name: "项目配置",
                    activeMenu: "/projectMange"
                },
                component: threeRouter,
                children: [{
                    path: '/projectMange/projectInfo',
                    name: 'projectInfo',
                    isSilderShow: true,

                    meta: {
                        name: "基础信息",
                        activeMenu: "/projectMange",
                        //控制左边导航条高亮
                        apiActiveMenu: '/projectMange/projectInfo'
                    },
                    component: projectInfo,
                }]
            }, {
                path: '/resources',
                name: 'resources',
                singleType: false,
                meta: {
                    name: "存储计算资源",
                    activeMenu: "/projectMange",

                },
                component: threeRouter,
                children: [{
                    path: '/projectMange/saveMangement',
                    name: 'saveMangement',
                    isSilderShow: true,

                    meta: {
                        name: "存储管理",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/saveMangement'

                    },
                    component: saveMangement,
                }, {
                    path: '/projectMange/calculation',
                    name: 'calculation',
                    isSilderShow: true,

                    meta: {
                        name: "计算管理",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/calculation'

                    },
                    component: calculation,
                }]
            },
            {
                path: '/jurisdiction',
                name: 'jurisdicte',
                singleType: false,
                meta: {
                    name: "权限管理",
                    activeMenu: "/projectMange"
                },
                component: threeRouter,
                children: [{
                    path: '/projectMange/single',
                    name: 'single',
                    isSilderShow: true,

                    meta: {
                        name: "个人权限",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/single'

                    },
                    component: single,
                }, {
                    path: '/projectMange/subject',
                    name: 'subject',
                    isSilderShow: true,

                    meta: {
                        name: "项目权限",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/subject'

                    },
                    component: subject,
                }, {
                    path: '/projectMange/jurisdiction',
                    name: 'jurisdiction',
                    isSilderShow: true,

                    meta: {
                        name: "权限申请",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/jurisdiction'

                    },
                    component: jurisdiction,
                }]
            },
            {
                path: '/tenant',
                name: 'tenant',
                singleType: false,
                meta: {
                    name: "租户管理",
                    activeMenu: "/projectMange"
                },
                component: threeRouter,
                children: [{
                    path: '/projectMange/allTenant',
                    name: 'allTenant',
                    isSilderShow: true,

                    meta: {
                        name: "全部租户",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/allTenant'

                    },
                    component: allTenant,
                }, {
                    path: '/projectMange/myTenant',
                    name: 'myTenant',
                    isSilderShow: true,

                    meta: {
                        name: "我的租户",
                        activeMenu: "/projectMange",
                        apiActiveMenu: '/projectMange/myTenant'

                    },
                    component: myTenant,
                }]
            },
        ]
    },

]


//动态路由
export const asyncRouterMap = [
    //同步中心
    {
        path: '/synchronization',
        redirect: '/synchronization/dateSource',
        name: 'synchronization',
        hidden: false,
        meta: {
            name: "同步中心",
            activeMenu: "/synchronization",
            //角色权限
            roles: ['sale']
        },
        component: layout,
        children: [{
            path: '/synchronization/addTask',
            name: 'addTask',
            //是否显示在侧边栏
            isSilderShow: false,
            singleType: true,
            meta: {
                name: "新增数据",
                roles: ['sale'],
                activeMenu: "/synchronization",
                apiActiveMenu: '/synchronization/addTask'
            },
            component: addTask,
        }, {
            path: '/synchronization/dateSource',
            name: 'dateSource',
            isSilderShow: true,
            singleType: true,
            meta: {
                name: "数据源",
                roles: ['sale'],
                activeMenu: "/synchronization",
                apiActiveMenu: '/synchronization/dateSource'
            },
            component: dateSource,
        }, {
            path: '/synchronization/meanwhile',
            name: 'meanwhile',
            isSilderShow: true,
            singleType: true,
            meta: {
                name: "同步管理",
                roles: ['sale'],
                activeMenu: "/synchronization",
                apiActiveMenu: '/synchronization/meanwhile'
            },
            component: meanwhile,
        }, ]
    },

]

const router = new VueRouter({
    routes: defultRouterMap
})

export default router