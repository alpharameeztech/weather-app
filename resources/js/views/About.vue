<template>
            
            <div class="col-md-5 col-md-offset-2">
                 
                <div class="panel panel-default">
                   
                    <div class="panel-body">
                       
                       <h4>Weekly Forecast of {{city_name}}</h4>
                       
                       <div class="card" >
                           
                            <div class="card-body">
                                <h4 class="card-title">{{city_name}} <span class="badge badge-primary">Today: {{the_temp}} °C</span></h4>
                                <img v-if="weather_state_abbr" :src="weather_state_abbr" alt="Snow" style="width:32px">
                                  
                                <p class="card-text">Max: {{max_temp }}°C</p>
                                <p class="card-text">Min: {{min_temp }}°C</p>
                              
                            </div>
                        </div>

                    </div>

                </div>
               
            </div>

            


    
</template>

<script>
    export default {
     

        data: function () {
            return {
                woeid:  this.$route.params.woeid,
                city_name: 'Loading...',
                min_temp: 'loading...',
                max_temp: 'Loading...',
                weather_state_abbr: false,
                the_temp: 'Loading...',
                consolidated_weather: []
               
              
            }
        },

        mounted() {

             axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/`+ this.woeid)
            .then(res => {
                this.city_name = res.data.title;
                this.min_temp = res.data.consolidated_weather[0].min_temp;
                this.max_temp = res.data.consolidated_weather[0].max_temp;
                this.the_temp = res.data.consolidated_weather[0].the_temp;
                this.weather_state_abbr =  'https://www.metaweather.com/static/img/weather/' + res.data.consolidated_weather[0].weather_state_abbr +'.svg';
                this.consolidated_weather = res.data.consolidated_weather;
                console.log(res.data.consolidated_weather[0]);
          
             })
            
        },

        created() {
            // axios call here.
        }
    }
</script>
