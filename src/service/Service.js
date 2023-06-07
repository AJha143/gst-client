import Axios from 'axios'
import {store} from '../store/store'

const {login} = store.getState();

const AUTH_TOKEN = login?.loginDetails?.accessToken || "";
console.log(AUTH_TOKEN);
console.log(login);
const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL ,
  headers:{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${AUTH_TOKEN}`,
    // "Access-Control-Allow-Origin": "http://localhost:3000/"
  }
})

// axios.interceptors.response.use((response)=>response,(error)=>{
//    if(error.response.status === 401){
//     console.log("unauthUser login again");
//    }
//    return Promise.reject(error.response)
// })


const apiRequest = (options) => {
   const {url,method,headers={},data,params={}} = options

    switch (method.toLowerCase()) {
        case 'get':
        return axios({
            url,
            method,
            headers:{        
               ...headers
            },
            data,
            params
        })
        case 'post':
            return axios({
                url,
                method,
                headers:{
                    ...headers
                 },
                data,
              params
            })
         
    
        default:   
                return axios(options)
    }
  }


export default apiRequest;
