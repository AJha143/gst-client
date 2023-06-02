import axios from 'axios'
// import { redirect } from 'react-router-dom'
const fetch = (options) => {
   const {url,method,headers={},data,token=""} = options
    const baseURL = process.env.REACT_APP_BASE_URL
    console.log(baseURL,url)
    switch (method.toLowerCase()) {
        case 'get':
        return axios({
            url:`${baseURL}${url}`,
            // baseURL,
            method,
            headers:{
               " Content-Type" : "application/json",
               "Authorization" : `Bearer ${token}`,
               ...headers
            },
            data
        })
        case 'post':
            return axios({
                url:`${baseURL}${url}`,
                // baseURL,
                method,
                headers:{
                    " Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`,
                    ...headers
                 },
                data,
                validateStatus: (status)=>{
                    console.log(status);
                    // if(status === 200){
                    //     window.location = "/"
                    // }
                }
            })
         
    
        default:   
                return axios(options)
    }
}

export default fetch;