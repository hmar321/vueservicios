<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">VueServicios</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/coches">Coches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosdetalle"
              >Empleados detalle</router-link
            >
          </li>

          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Oficios
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="oficio in oficios" :key="oficio">
                <router-link class="dropdown-item" :to="'/empleadosoficios/'+oficio">{{oficio}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';

const serviceEmpleados=new ServiceEmpleados();

export default {
  name: "MenuComponent",
  data() {
    return {
      oficios: [],
    };
  },
  methods: {
    empleadosOficios() {
      serviceEmpleados.getOficios().then((res) => {
        this.oficios = res.data;
      });
    },
  },
  mounted() {
    this.empleadosOficios();
  },
};
</script>

<style>
</style>