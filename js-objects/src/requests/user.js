import  axios  from "axios";
export const userRequests={
    login:function(user){
        return axios.post("https://localhost:7079/Auth/Login")
    },
    register:function(user){
        return axios.post("https://localhost:7079/Auth/Register",user)
    }
}