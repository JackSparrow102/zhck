import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Index2 from './views/Index2.vue';
import Index3 from './views/Index3.vue';

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
            path: '/Index2',
            name: 'Index2',
            component: Index2,
        },
        {
            path: '/Index3',
            name: 'Index3',
            component: Index3,
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