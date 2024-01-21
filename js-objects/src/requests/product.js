import axios from "axios";
import { baseUrl } from "./apiUrlConfig";
export const productRequests={
    get:function(){
        return axios.get(`${baseUrl}/Product`)
    },
    post:function(product){
        return axios.post(`${baseUrl}/Product`,product)
    },
    put:function(id,product){
        return axios.put(`${baseUrl}/Product/${id}`,product);
    },
    delete:function(id){
        return axios.delete(`${baseUrl}/Product/${id}`);
    }
}