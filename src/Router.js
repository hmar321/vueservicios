import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import CochesComponent from "./components/Coches.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/coches", component: CochesComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;