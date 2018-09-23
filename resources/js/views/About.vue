<template>
        <div class="row">
            
            <div class="col-md-12">
                <h4>Weekly Forecast of {{city_name}}</h4>
            </div>
            
            <div class="col-md-5 col-md-offset-2"  v-for="weather in consolidated_weather" :key="weather.id">
                 
                <div class="panel panel-default">
                   
                    <div class="panel-body">
                       
                       <div class="card" >
                          
                            <div class="card-body">
                                <h4 class="card-title">{{city_name}} <span class="badge badge-primary">{{weather.applicable_date  | weekdays }}: {{weather.the_temp}} °C</span></h4>
                                <img v-if="weather_state_abbr" :src="weather_state(weather.weather_state_abbr)" alt="Snow" style="width:32px">
                                <p class="card-text">Date: {{weather.applicable_date  | weekdays }} </p>
                                <p class="card-text">Max: {{weather.max_temp }}°C</p>
                                <p class="card-text">Min: {{weather.min_temp }}°C</p>
                                <p class="card-text">Humidity: {{weather.humidity }}</p>
                            </div>
                        </div>

                    </div>

                </div>
               
            </div>
        </div>

            


    
</template>

<script>
const moment = require('moment')

Vue.use(moment);

    export default {
     

        data: function () {
            return {
                woeid:  this.$route.params.woeid,
                city_name: 'Loading...',
                min_temp: 'loading...',
                max_temp: 'Loading...',
                weather_state_abbr: [],
                the_temp: 'Loading...',
                consolidated_weather: []
               
              
            }
        },
        methods: {
            // a computed getter
            weather_state(val) {
                return 'https://www.metaweather.com/static/img/weather/' + val +'.svg';
            }
        },
        mounted() {

             axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/`+ this.woeid)
            .then(res => {
                this.city_name = res.data.title;
                this.min_temp = res.data.consolidated_weather[0].min_temp;
                this.max_temp = res.data.consolidated_weather[0].max_temp;
                this.the_temp = res.data.consolidated_weather[0].the_temp;
                
                //this.weather_state_abbr =  'https://www.metaweather.com/static/img/weather/' + res.data.consolidated_weather[0].weather_state_abbr +'.svg';
                this.consolidated_weather = res.data.consolidated_weather;

                for (var index in this.consolidated_weather) {    // don't actually do this
                    // console.log(this.consolidated_weather[index].weather_state_abbr);
                     this.weather_state_abbr.push('https://www.metaweather.com/static/img/weather/' + this.consolidated_weather[index].weather_state_abbr +'.svg');
                }

             })
            
        },

        filters: {
            weekdays: function (value) {
                return moment(value).format('dddd');    
                // return moment(value).format('dddd/MM/YYYY');
                // return moment(value).format('DD/MM/YYYY');
            }
        },

        created() {
            // axios call here.
        }
    }
</script>
