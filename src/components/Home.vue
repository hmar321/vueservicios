<template>
  <div>
    <h1 class="text-danger">Home component</h1>
    <h3>{{ mensaje }}</h3>
  </div>
</template>

<script>
import ServiceEjemplo from "../services/ServiceEjemplo";
//PARA UTILIZAR UN SERVICIO, DEBEMOS CREAR UNA CONSTANTE
//QUE SEA UN OBJETO DE NUESTRA CLASE SERVICE
const service = new ServiceEjemplo();
export default {
  name: "HomeComponent",
  data() {
    return {
      mensaje: "",
    };
  },
  mounted() {
    this.mensaje = service.getSaludo("Alumno");
  },
};
</script>

<style>
</style>