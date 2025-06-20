import axios from "axios";
import React from "react";

const instance = axios.create({ baseURL: "https://fakestoreapi.com/" });

instance.interceptors.request.use(
  function (config) {
    console.log("Request--->", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("Response--->", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
