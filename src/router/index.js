import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Join from '../views/Join.vue'
import Test from '../views/Test.vue'
import Rules from '../views/Rules.vue'
import Encryptor from '../views/Encryptor.vue'
import NewPlay from '../views/NewPlay.vue'

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
    path: '/play2/', component: NewPlay, props: {createlobby: true}
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }

]

const router = new VueRouter({
  routes
})

export default router
