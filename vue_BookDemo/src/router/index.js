import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '图书管理', show: true,
    component: () => import('../views/Index'),
    redirect: "/manage",
    children: [
        {
          path: '/manage',
          name: '查询图书',
          component: () => import('../views/BookManage')
        },
        {
          path: '/add',
          name: '添加图书',
          component: () => import('../views/AddBook')
        }
    ]
  },
  {
      path: '/update',
      show: false,
      component: () => import('../views/BookUpdate')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
