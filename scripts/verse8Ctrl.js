angular
    .module("hebrewApp")
    .controller("verse8Ctrl", function($scope, $stateParams, mainSvc){


        $scope.getData = function(){
            mainSvc.getData().then(function(response){
                $scope.verse8 = response.eight;
                console.log(response);
            })
        }

$scope.getData();



});