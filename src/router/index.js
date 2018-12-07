import Vue from 'vue';
import Router from 'vue-router';
import TestPage from '@/pages/TestPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Test',
      component: TestPage,
      children: [

      ],
    },
  ],
});
