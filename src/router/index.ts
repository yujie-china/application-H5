import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/template",
    redirect: "/template/home",
  },
  {
    path: "/template/home",
    name: "home",
    component: () => import("@/pages/home/home.vue"),
  },
  {
    path: "/template/form",
    name: "form",
    component: () => import("@/pages/form/form.vue"),
  },
  {
    path: "/template/thanks",
    name: "thanks",
    component: () => import("@/pages/thanks/thanks.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
