
export function profileRouter() {
    return [{
        path: '/profile',
        name: 'profile',
        component: resolve =>require(['./index.vue'],resolve),
        meta: {
            title: '个人中心'
        }
    },
    {
        path: '/profile/online-course',
        name: 'course',
        component: resolve =>require(['./components/course.vue'],resolve),
        meta: {
            title: '在线课程'
        }
    },
    {
        path: '/profile/courseDetail',
        name: 'courseDetail',
        component: resolve =>require(['./components/courseDetail.vue'],resolve),
        meta: {
            title: '详情'
        }
    },
    {
        path: '/profile/class',
        name: 'class',
        component: resolve =>require(['./components/class.vue'],resolve),
        meta: {
            title: '班级'
        }
    },
    {
        path: '/class-schedule',
        name: 'classSchedule',
        component: resolve =>require(['./components/classSchedule.vue'],resolve),
        meta: {
            title: '班级日程'
        }
    },
    {
        path: '/profile/exam',
        name: 'exam',
        component: resolve =>require(['./components/exam.vue'],resolve),
        meta: {
            title: '考试'
        }
    }]
}