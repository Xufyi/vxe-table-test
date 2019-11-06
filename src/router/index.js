import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table'
import Table2 from '@/components/table2'
// import { Table } from '../../node_modules/view-design';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table2',
      name: 'table2',
      component: Table2
    },
    {
      path: '/',
      name: 'table',
      component: Table
    }
  ]
})
