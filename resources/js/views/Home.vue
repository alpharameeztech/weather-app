<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-md-offset-2">
                <div class="panel panel-default">
                    <!-- <div class="panel-heading">Home Page</div>

                    <div class="panel-body">
                        I'm an example component! Incredible
                    </div> -->
                    
                      <div class="container">
                        <div class="row">
                            <weather v-bind:woeid="2344116"></weather>

                            <weather v-bind:woeid="638242"></weather>

                            <weather v-bind:woeid="44418"></weather>

                            <weather v-bind:woeid="565346"></weather>

                            <weather v-bind:woeid="560743"></weather>

                            <weather v-bind:woeid="9807"></weather>
                        </div>
                      </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>



    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
