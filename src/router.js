import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import LoginPage from './views/LoginPage.vue';
import ckgl from './views/ckgl.vue';
import goodsedit from './views/goodsedit.vue';

Vue.use(Router);

const router = new Router({
    // base: '/archive/',
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/LoginPage',
            name: 'LoginPage',
            component: LoginPage,
        },
        {
            path: '/ckgl',
            name: 'ckgl',
            component: ckgl,
        },
        {
            path: '/goodsedit',
            name: 'goodsedit',
            component: goodsedit,
        },
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