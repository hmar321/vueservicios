<template>
  <div>
    <h1>Coches component</h1>
    <div v-for="car in coches" :key="car">
      <h1 style="color: blue">{{ car.marca }}, {{ car.modelo }}</h1>
      <h2 style="color: red">Conductor: {{ car.conductor }}</h2>
      <img :src="car.imagen" style="width: 150px; heigth: 150px" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
///SI NECESITO VARIABLES QUE SEAN DECLARADAS PARA TODOS
//LOS METODOS QUE TENGAMOS EN EL COMPONENT, LO HAREMOS AQUI
//var urlApiCoches = "https://apicochespaco.azurewebsites.net/";
export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  methods: {
    cargarCoches() {
      var request = "/webresources/coches";
      //LAS VARIABLES POR ENCIMA DE export default
      //NO UTILIZAN this
      var url = Global.urlApiCoches + request;
      console.log(url);
      axios.get(url).then((res) => {
        this.coches = res.data;
      });
    },
  },
  mounted() {
    this.cargarCoches();
  },
};
</script>

<style>
</style>