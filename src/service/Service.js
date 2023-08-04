import Axios from "axios";
import { store } from "../store/store";
import Swal from "sweetalert2";
const { login } = store.getState();

const AUTH_TOKEN = login?.loginDetails?.accessToken  || "";

console.log(login);
const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
    Accept: "application/json",
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("unauthUser login again");
      Swal.fire({
        icon: "warning",
        title: "Token Expired !!",
        text: "Token Expired ! Kindly Refresh...",
      });
    }
    return Promise.reject(error.response);
  }
);

const apiRequest = (options) => {
  const { url, method, headers = {}, data, params = {} } = options;
  console.log(params, "check params");
  switch (method.toLowerCase()) {
    case "get":
      return axios({
        url,
        method,
        headers: {
          ...headers,
        },
        data,
        params,
      });
    case "post":
      return axios({
        url,
        method,
        headers: {
          ...headers,
        },
        data,
        params,
      });

    default:
      return axios(options);
  }
};

export default apiRequest;
