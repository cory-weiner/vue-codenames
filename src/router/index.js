import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'
import NewPlay from '../views/NewPlay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/rules/',
    name: 'rules',
    component: Rules
  },
  {
    path: '/play/', component: NewPlay, props: {createlobby: true}
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
