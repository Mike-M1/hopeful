import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Aboutus.vue')
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/mensProducts",
      name: "mensProducts",
      component: () => import("../views/MensProducts.vue"),
    },
    {
      path: "/womensProducts",
      name: "womensProducts",
      component: () => import("../views/WomensProducts.vue"),
    }
  ]
})

export default router
