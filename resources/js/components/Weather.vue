<template>
  
            <div class="col-md-5 col-md-offset-2">
                <div class="panel panel-default">
                   
                    <div class="panel-body">
                       
                       <div class="card">
                           
                            <div class="card-body">
                                <h4 class="card-title">{{city_name}} <span class="badge badge-primary">Today</span></h4>
                                <img v-if="weather_state_abbr" :src="weather_state_abbr" alt="Snow" style="width:32px">
                                <p class="card-text">Max: {{max_temp}}°C</p>
                                <p class="card-text">Max: {{min_temp}}°C</p>
                                <a href="#" class="btn btn-primary">View Forcest</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

    
</template>

<script>

    export default {

        props:['woeid'],

        data: function () {
            return {
                data_woeid: this.woeid,
                city_name: 'Loading...',
                min_temp: 'loading...',
                max_temp: 'Loading...',
                weather_state_abbr: false
            }
        },

        mounted() {

             axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/`+ this.woeid)
          // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.metaweather.com/api/location/search/?query=london`)
            .then(res => {
                this.city_name = res.data.title;
                this.min_temp = res.data.consolidated_weather[0].min_temp;
                this.max_temp = res.data.consolidated_weather[0].max_temp;
                this.weather_state_abbr =  'https://www.metaweather.com/static/img/weather/' + res.data.consolidated_weather[0].weather_state_abbr +'.svg';

                console.log(res.data.consolidated_weather[0]);
          
             })
        }
    }
</script>
