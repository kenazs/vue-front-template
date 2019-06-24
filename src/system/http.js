import axios from "axios";
import router from "@/router/index";

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      router.push("/accessdenied");
      return;
    }
    console.log(error.response.data.exceptionMessage);
    return Promise.reject(error);
  }
);

export const HTTP = instance;
