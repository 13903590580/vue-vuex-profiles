import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      // 懒加载
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // 懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // 懒加载
      component: () => import('./views/DashBoard.vue')
    },
    {
      path: '/create-profile',
      name: 'create-profile',
      // 懒加载
      component: () => import('./views/CreateProfile.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      // 懒加载
      component: () => import('./views/EditProfile.vue')
    },
    {
      path: '/add-experience',
      name: 'add-experience',
      // 懒加载
      component: () => import('./views/AddExperience.vue')
    },
    {
      path: '/add-education',
      name: 'add-education',
      // 懒加载
      component: () => import('./views/AddEducation.vue')
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})

// 全局路由守卫
route.beforeEach((to, from, next) => {
  const isLogin = localStorage.jwtToken ? true : false;
  if (to.path == "/login" || to.path == "/register" || to.path == "/") {
    // 执行    
    next();
  } else {
    // 判断用户是否处于登录状态
    isLogin ? next() : next("/login")
  }
})

export default route;
