import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '@/views/Home/Home.vue'
import Mall from '@/views/Mall/Mall.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: 'home', component: Home },
      { path: 'mall', component: Mall },
      { path: 'user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
