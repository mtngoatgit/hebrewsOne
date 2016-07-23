// This is where I need to process the info from db.json to pass along to the controllers

angular
    .module("hebrewApp")
    .service('mainSvc', function($http){

        this.getData = function(){
        return $http.get('db.json').then(function(response){
            return response.data;
        });
        };
       

    })//end of service