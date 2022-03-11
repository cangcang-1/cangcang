import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '@/views/Home/Home.vue'
import Mall from '@/views/Mall/Mall.vue'
import User from '@/views/User/User.vue'
import PageOne from '@/views/Other/PageOne.vue'
import PageTwo from '@/views/Other/PageTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home',
    children: [
      { path: 'main', name: 'main', component: Home },
      { path: 'home', name: 'home', component: Home },
      { path: 'mall', name: 'mall', component: Mall },
      { path: 'user', name: 'user', component: User },
      { path: 'page1', name: 'page1', component: PageOne },
      { path: 'page2', name: 'page2', component: PageTwo }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
