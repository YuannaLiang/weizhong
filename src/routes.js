import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import { profileRouter } from './page/profile/routes';
import { classRouter } from './page/class/routes';

let defaultRouters = [{
    path: '/',
    component: resolve =>require(['./page/index.vue'],resolve),
}]

let routes = Array.prototype.concat.call(defaultRouters, profileRouter(),classRouter());

export default new Router({
    routes
})
