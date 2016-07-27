angular
    .module("hebrewApp")
    .controller("verse12Ctrl", function($scope, $stateParams, mainSvc){


        $scope.getData = function(){
            mainSvc.getData().then(function(response){
                $scope.verse12 = response.twelve;
                console.log(response);
            })
        }

$scope.getData();



});