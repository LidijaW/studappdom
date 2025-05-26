import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  { path: "/", name: "auth", component: AuthView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
