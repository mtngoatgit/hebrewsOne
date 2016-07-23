angular
    .module("hebrewApp")
    .controller("verse4Ctrl", function($scope, $stateParams, mainSvc){


        $scope.getData = function(){
            mainSvc.getData().then(function(response){
                $scope.verse4 = response.four;
                console.log(response);
            })
        }

$scope.getData();



});