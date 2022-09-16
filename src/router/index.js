import store from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginVue from "@/views/auth/Login.vue";
import RegisterVue from "@/views/auth/Register.vue";
import AboutViewVue from "@/views/AboutView.vue";
import ProductViewVue from "@/views/ProductView.vue";
import Product from "@/views/products/Product.vue";
import Customer from "@/views/customers/Customer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { needAuth: true, title: "Home" },
  },
  {
    path: "/signin",
    name: "signin",
    component: LoginVue,
    meta: { title: "Login" },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterVue,
    meta: { title: "Register" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutViewVue,
    meta: { needAuth: true, title: "About" },
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
    meta: { needAuth: true, title: "Customer" },
  },
  {
    path: "/products",
    name: "products",
    component: ProductViewVue,
    meta: { needAuth: true, title: "Products" },
  },
  {
    path: "/product/:id",
    name: "Product Detail",
    component: Product,
    meta: { needAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Bayu`;
  if (to.matched.some((record) => record.meta.needAuth)) {
    let isAuth = store.getters.isAuth;
    if (!isAuth) {
      next({ name: "signin" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
