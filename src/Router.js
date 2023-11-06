import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import CochesComponent from "./components/Coches.vue";
import EmpleadosComponent from "./components/EmpleadosDetalle.vue";
import EmpleadosOficiosComponent from "./components/EmpleadosOficios.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/coches", component: CochesComponent },
    { path: "/empleadosdetalle", component: EmpleadosComponent },
    { path: "/empleadosoficios/:oficio", component: EmpleadosOficiosComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;