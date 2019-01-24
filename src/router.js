import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import LoginPage from './views/loginPage.vue';
import DeptIndex from './views/dept/Index.vue';
import UserIndex from './views/user/Index.vue';
import Details from './views/details.vue';
import RoleIndex from './views/role/Index.vue';
import UserRoleIndex from './views/userRole/Index.vue';

Vue.use(Router);

export default new Router({
  // base: '/archive/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/DeptIndex',
      name: 'DeptIndex',
      component: DeptIndex,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/UserIndex',
      name: 'UserIndex',
      component: UserIndex,
    },
    {
      path: '/RoleIndex',
      name: 'RoleIndex',
      component: RoleIndex,
    },
    {
      path: '/UserRoleIndex',
      name: 'UserRoleIndex',
      component: UserRoleIndex,
    },
  ],
});
