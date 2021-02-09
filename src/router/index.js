import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import KeranjangPage from '../views/KeranjangPage.vue'
import SuccessPage from '../views/SuccessPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // path menunjukan posisi halaman
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    // path menunjukan posisi halaman
    path: '/product-details',
    name: 'ProductDetailsPage',
    component: ProductDetailsPage
  },
  {
    // path menunjukan posisi halaman
    path: '/keranjang',
    name: 'KeranjangPage',
    component: KeranjangPage
  },
  {
    // path menunjukan posisi halaman
    path: '/success',
    name: 'SuccessPage',
    component: SuccessPage
  },
  {
    // path menunjukan posisi halaman
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    // path menunjukan posisi halaman
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
