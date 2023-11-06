import Global from "@/Global";
import axios from "axios";
export default class ServiceCoches {
    getCoches() {
        var request = "webresources/coches";
        var url = Global.urlApiCoches + request;
        return axios.get(url);
    }
    // getCoches= new Promise(function (resolve) {
    //     var request="/webresources/coches";
    //     var url=Global.urlApiCoches+request;
    //     axios.get(url).then(res=>{
    //         resolve(res.data);
    //     });
    //   })
}