<!DOCTYPE html>
<html lang="en">
    <head>
       
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.min.css">
        <link rel="stylesheet" href="/css/app.css">

        <title>My App</title>
    </head>
    <body>
        <div id="app">
            @include ('layouts.header')

            <section class="section">
                <div class="container">
                    
                <div class='search-container'>
                    <i id="search" class="fas fa-search fa-3x hide"></i>
                    <input type='text' placeholder='Search your city here' v-model="search" class='search-input'>
                    
                </div>
                

                <div class="card" v-for="city in filteredList">
                    <div class="card-body">
                        <a v-bind:href="city.link">
                            @{{ city.title }}
                        </a>
                    </div>
                </div>
                
                <br/>

                    <router-view></router-view>
 
                </div>
            </section>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
