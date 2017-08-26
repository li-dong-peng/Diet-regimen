import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import lessloader from 'less-loader'
import $ from 'jquery';
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios


//公共配置
axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';


axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});


import 'element-ui/lib/theme-default/index.css';
import {  Carousel, CarouselItem } from 'element-ui';

Vue.use(Carousel)
Vue.use(CarouselItem)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
//template: '<App/>',
  //components: { App }
  render: h => h(App)
})
