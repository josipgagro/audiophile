import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import ProductDetalPage from "../views/ProductDetailView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "category",
    component: CategoryView,
  },
  {
    path: "/product-detail/:productId",
    name: "product-detail",
    component: ProductDetalPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    beforeEnter(to, from) {
      if (store.state.cart.length === 0) {
        return "/cart";
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
