import axios from "axios";
import Vue from 'vue'


function request(config) {

  const request = axios.create({
    baseURL: "http://localhost:9801/",
    timeout: 50000
  });

  //请求拦截器
  request.interceptors.request.use(config => {
    return config;
  }, error => {
    throw error;
  });



  //响应拦截器
  request.interceptors.response.use(value => {
    return value.data;
  }, error => {
    throw error;
  });


  return request(config);
}



export default request;









































