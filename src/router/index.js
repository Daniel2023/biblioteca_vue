import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/site/Home.vue'
import SignIn from '../views/site/SignIn.vue'
import SignUp from '../views/site/SignUp.vue'
import Cart from '../views/site/Cart.vue'
import Dashboard from '../views/admin/dashboard'
import Category from '../views/admin/category'
import Book from '../views/admin/book'
import LoginAdmin from '../views/admin'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Dashboard
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
