<template>
  <div class="container">
    <h1>Empleados oficios {{ oficio }}</h1>
    <table class="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado">
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
          <td>{{ empleado.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";

const serviceEmpleados = new ServiceEmpleados();
export default {
  name: "EmpleadosOficiosComponent",
  data() {
    return {
      oficio: "",
      empleados: [],
    };
  },
  methods: {
    loadEmpleados() {
      serviceEmpleados.getEmpleadosOficio(this.oficio).then((res) => {
        this.empleados = res.data;
      });
    },
    recogerParametros() {
      var params = this.$route.params;
      this.oficio = params.oficio;
    },
  },
  mounted() {
    this.recogerParametros();
    this.loadEmpleados();
  },
  watch: {
    "$route.params.oficio"(next, old) {
      if (next != old) {
        this.recogerParametros();
        this.loadEmpleados();
      }
    },
  },
};
</script>

<style>
</style>