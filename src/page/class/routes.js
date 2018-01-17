export function classRouter(){
    return [
        {
            path: '/train-class',
            name: 'trainClass',
            component: resolve =>require(['./index.vue'],resolve),
            meta: {
                title: '培训班级'
            }
        },
        {
            path: '/train-detail',
            name: 'trainDetail',
            component: resolve =>require(['./components/trainClassDetail.vue'],resolve),
            meta: {
                title: '培训详情'
            }
        },
        
        {
            path: '/sign-on',
            name: 'signOn',
            component: resolve =>require(['./components/signOn.vue'],resolve),
            meta: {
                title: '签到'
            }
        }
    ]
}