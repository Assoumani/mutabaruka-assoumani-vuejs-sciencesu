import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "../components/HomeComponent";
import TeamComponent from "../components/TeamComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
