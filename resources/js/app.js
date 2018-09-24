import './bootstrap';
import router from './routes';
window.Vue = require('vue');

Vue.component('weather', require('./components/Weather.vue'));



class City {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
    }
}

new Vue({
    el: '#app',

    router,

    // this data usually comes from the server side
    data: {
        search: '',
        cities : [
          new City(
            'Istanbul', 
            '#/weather/2344116', 
          ),
          new City(
            'Berlin', 
            '#/weather/638242', 
          ),
          new City(
            'London', 
            '#/weather/44418', 
          ),
          new City(
            'Helsinki', 
            '#/weather/565346', 
          ),
          new City(
            'Dublin', 
            '#/weather/560743', 
          ),
          new City(
            'Vancouver', 
            '#/weather/9807', 
          ),
        
    ]
      },

      computed: {
        filteredList() {
          return this.cities.filter(city => {
          
            if(this.search){
                return city.title.toLowerCase().includes(this.search.toLowerCase())
            }
          })
        }
      }
   
});
