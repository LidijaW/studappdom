import { createRouter, createWebHistory } from "vue-router";

// ✅ Import viewova koje koristiš
import AuthView from "../views/AuthView.vue";
import DashboardView from "../views/DashboardView.vue";
import MealsView from "../views/MealsView.vue";
import ReportView from "../views/ReportView.vue";
import RoomsView from "../views/RoomsView.vue";
import PaymentView from "../views/PaymentView.vue";

// ✅ Definiraj i koristi rute
const routes = [
  { path: "/", name: "auth", component: AuthView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
  { path: "/meals", name: "meals", component: MealsView },
  { path: "/report", name: "report", component: ReportView },
  { path: "/rooms", name: "rooms", component: RoomsView },
  { path: "/payment", name: "payment", component: PaymentView },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // ✅ sada koristiš definirane rute
});

export default router;
