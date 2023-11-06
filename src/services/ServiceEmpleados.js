import Global from "../Global";
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleados() {
        var request = "api/empleados";
        var url = Global.urlApiEmpleados + request;
        return axios.get(url);
    }

    findEmpleado(id){
        var request = "api/empleados/"+id;
        var url = Global.urlApiEmpleados + request;
        return axios.get(url);
    }
    getOficios(){
        var request = "api/empleados/oficios";
        var url = Global.urlApiEmpleados + request;
        return axios.get(url);
    }
    getEmpleadosOficio(oficio){
        var request = "api/Empleados/EmpleadosOficio/"+oficio;
        var url = Global.urlApiEmpleados + request;
        return axios.get(url);
    }


}
