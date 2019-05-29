import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import LoginPage from './views/LoginPage.vue';

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