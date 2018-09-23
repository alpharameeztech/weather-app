import './bootstrap';
import router from './routes';
window.Vue = require('vue');

Vue.component('weather', require('./components/Weather.vue'));


new Vue({
    el: '#app',

    router,
   
});
