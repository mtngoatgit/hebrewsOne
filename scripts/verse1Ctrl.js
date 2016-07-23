angular
    .module("hebrewApp")
    .controller("verse1Ctrl", function($scope, $stateParams, mainSvc){


        $scope.getData = function(){
            mainSvc.getData().then(function(response){
                $scope.verse1 = response.one;
                console.log(response);
            })
        }

$scope.getData();



});//end of controller