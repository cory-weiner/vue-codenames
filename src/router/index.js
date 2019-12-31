import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Join from '../views/Join.vue'
import Test from '../views/Test.vue'
import Rules from '../views/Rules.vue'
import Encryptor from '../views/Encryptor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/join/',
    name: 'join',
    component: Join
  },
  {
    path: '/test/',
    name: 'test',
    component: Test
  },
  {
    path: '/rules/',
    name: 'rules',
    component: Rules
  },
  {
    path: '/join/:id', component: Encryptor
  },
  {
    path: '/play/', component: Play
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
