const topNav = [{
        name: '项目管理',
        leftNavName: 'projectMange',
        permission: 'admin',
        isLeftShow: true
    }, {
        name: '同步中心',
        leftNavName: 'synchronization',
        permission: 'admin',
        isLeftShow: true

    }
    // , {
    //     name: '数据开发',
    //     leftNavName: 'dataDev',
    //     permission: 'admin',
    //     isLeftShow: false

    // }, {
    //     name: '发布管理',
    //     leftNavName: 'release',
    //     permission: 'admin',
    //     isLeftShow: true

    // }, {
    //     name: '离线调度',
    //     leftNavName: 'offLineDispatch',
    //     permission: 'admin',
    //     isLeftShow: true

    // }, {
    //     name: '数据质量',
    //     leftNavName: 'dataQuality',
    //     permission: 'admin',
    //     isLeftShow: true

    // }, {
    //     name: '监控告警',
    //     leftNavName: 'monitor',
    //     permission: 'admin',
    //     isLeftShow: false

    // }, {
    //     name: '实时开发',
    //     leftNavName: 'realDev',
    //     permission: 'admin',
    //     isLeftShow: false

    // }, {
    //     name: '实时运维',
    //     leftNavName: 'maintenance',
    //     permission: 'admin',
    //     isLeftShow: false

    // }
]
const leftNav = {
    projectMange: [{
        name: '项目配置',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '基础信息',
            permission: 'admin',
            path: '/projectMange/projectInfo'
        }]
    }, {
        name: '存储计算资源',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '存储管理',
            permission: 'admin',
            path: '/projectMange/saveMangement'
        }, {
            name: '计算管理',
            permission: 'admin',
            path: '/projectMange/calculation'
        }]
    }, {
        name: '权限管理',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '个人权限',
            permission: 'admin',
            path: '/projectMange/single'
        }, {
            name: '项目权限',
            permission: 'admin',
            path: '/projectMange/subject'
        }, {
            name: '权限申请',
            permission: 'admin',
            path: '/projectMange/jurisdiction'
        }]
    }, {
        name: '租户管理',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '全部租户',
            permission: 'admin',
            path: '/projectMange/allTenant'
        }, {
            name: '我的租户',
            permission: 'admin',
            path: '/projectMange/myTenant'
        }]
    }],
    synchronization: [{
        name: '数据源',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '数据源',
            permission: 'admin',
            path: '/synchronization/dateSource'
        }]
    }, {
        name: '同步管理',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '同步管理',
            permission: 'admin',
            path: '/synchronization/meanwhile'
        }]
    }],
    dataDev: [{
        name: '离线开发',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '离线开发',
            permission: 'admin',
            path: '/dataDev/offLineDev'
        }]
    }],
    release: [{
        name: '创建发布包',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '创建发布包',
            permission: 'admin',
            path: '/release/creatPackage'
        }]
    }, {
        name: '发布包列表',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '发布包列表',
            permission: 'admin',
            path: '/release/packageList'
        }]
    }],
    offLineDispatch: [{
        name: '调度大盘',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '调度大盘',
            permission: 'admin',
            path: '/offLineDispatch/market'
        }]
    }, {
        name: '周期任务运维',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '周期任务',
            permission: 'admin',
            path: '/offLineDispatch/periodicTask'
        }]
    }, {
        name: '手动任务运维',
        permission: 'admin',
        type: true,
        menuItems: [{
            name: '手动任务',
            permission: 'admin',
            path: '/offLineDispatch/manualTask'
        }]
    }],
    dataQuality: [{
        name: '数据质量概览',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '数据质量概览',
            permission: 'admin',
            path: '/dataQuality/overview'
        }]
    }, {
        name: '数据质量规则',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '数据质量规则',
            permission: 'admin',
            path: '/dataQuality/rule'
        }]
    }, {
        name: '规则执行查询',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '规则执行查询',
            permission: 'admin',
            path: '/dataQuality/search'
        }]
    }],
    monitor: [{
        name: '监控告警',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '监控告警',
            permission: 'admin',
            path: '/monitor/alarm'
        }]
    }],
    realDev: [{
        name: '实时开发',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '实时开发',
            permission: 'admin',
            path: '/realDev/onLineDev'
        }]
    }],
    maintenance: [{
        name: '实时运维',
        permission: 'admin',
        type: false,
        menuItems: [{
            name: '实时运维',
            permission: 'admin',
            path: '/maintenance/operations'
        }]
    }],
}

function getNav() {
    let obj = {};
    obj.topNav = topNav;
    obj.leftNav = leftNav;
    return obj;
}
module.exports = {
    getNav
}