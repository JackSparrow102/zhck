import Vue from 'vue';
import Router from 'vue-router';
import loginOptions from './views/loginOptions.vue';//登陆选项
import landing from './views/landing.vue';//登陆
import storeManagement from './views/storeManagement.vue';//商品管理-店铺
import commodityManagement1 from './views/commodityManagement1.vue';//商品管理-1
import commodityManagement2 from './views/commodityManagement2.vue';//商品管理-2
import viewLog from './views/viewLog.vue';//查看日志
import recoveryLog from './views/recoveryLog.vue';//恢复日志
import changePassword from './views/changePassword.vue';//修改密码

Vue.use(Router);

const router = new Router({
    // base: '/archive/',
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'loginOptions',
            component: loginOptions,
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: changePassword,
        },
        {
            path: '/loginOptions',
            name: 'loginOptions',
            component: loginOptions,
        },
        {
            path: '/landing',
            name: 'landing',
            component: landing,
        },
        {
            path: '/storeManagement',
            name: 'storeManagement',
            component: storeManagement,
        },
        {
            path: '/commodityManagement1',
            name: 'commodityManagement1',
            component: commodityManagement1,
        },
        {
            path: '/commodityManagement2',
            name: 'commodityManagement2',
            component: commodityManagement2,
        },
        {
            path: '/viewLog',
            name: 'viewLog',
            component: viewLog,
        },,
        {
            path: '/recoveryLog',
            name: 'recoveryLog',
            component: recoveryLog,
        }
    ],
});

// router.beforeEach((to, from, next) => {
//   const is_login = sessionStorage.getItem('userInfo');
//   console.log(is_login);
//   if (is_login) {
//     next();
//   } else {
//     if (to.path.includes('Login')) next();
//     else next('/LoginPage');
//   }
// });
export default router;