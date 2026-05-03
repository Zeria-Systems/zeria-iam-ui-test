import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import LoginWithEmail from '@/views/LoginWithEmail.vue'
import Dashboard from '@/views/Dashboard.vue'
import RegisterLoginWithEmail from '@/views/RegisterLoginWithEmail.vue'

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { public: true },
  },
  {
    path: '/auth/login-with-email',
    name: 'loginWithEmail',
    component: LoginWithEmail,
    meta: { public: true },
  },
  {
    path: '/auth/register-login-with-email',
    name: 'registerLoginWithEmail',
    component: RegisterLoginWithEmail,
    meta: { public: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: { showAlways: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const isAuth = isAuthenticated()
  if (to.meta.requiresAuth && !isAuth) {
    next({ name: 'home' })
  } else if (to.meta.public && isAuth && !to.meta.showAlways) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
