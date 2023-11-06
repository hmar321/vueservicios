<template>
  <div>
    <h1>Empleados detalle</h1>
    <form v-on:submit.prevent="buscarEmpleado()" class="w-50">
      <label>Seleccione un empleado</label>
      <select v-model="idEmpleado" class="form-select">
        <option
          v-for="empleado in empleados"
          :key="empleado"
          :value="empleado.idEmpleado"
        >
          {{ empleado.apellido }}
        </option>
      </select>
      <button class="btn btn-info">Detalles</button>
    </form>
    <div v-if="empleado">
      <h2 class="text-primary">{{ empleado.apellido }}</h2>
      <dl>
        <dt>Oficio</dt>
        <dd>{{ empleado.oficio }}</dd>
        <dt>Salario</dt>
        <dd>{{ empleado.salario }}</dd>
        <dt>Departamento</dt>
        <dd>{{ empleado.departamento }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const serviceEmpleados=new ServiceEmpleados();
export default {
  name: "EmpleadosComponent",
  data() {
    return {
      empleados: [],
      empleado: null,
      idEmpleado: -1,
    };
  },
  methods: {
    buscarEmpleado() {
      serviceEmpleados.findEmpleado(this.idEmpleado).then((res) => {
        this.empleado = res.data;
      });
    },
    cargarEmpleados() {
      serviceEmpleados.getEmpleados().then((res) => {
        this.empleados = res.data;
      });
    },
  },
  mounted() {
    this.cargarEmpleados();
  },
};
</script>

<style>
</style>