import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Category = () => import('../views/category/Category')
const Car = () => import('../views/car/Car')
const Me = () => import('../views/me/Me')
const Details = () => import('views/details/Details')

//配置映射
const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/details/:id',
    component: Details
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
