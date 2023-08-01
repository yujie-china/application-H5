import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/home.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/pages/form/form.vue"),
  },
  {
    path: "/thanks",
    name: "thanks",
    component: () => import("@/pages/thanks/thanks.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
