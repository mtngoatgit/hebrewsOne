angular
    .module("hebrewApp")
    .controller("mainCtrl", function($scope, $stateParams, mainSvc){


        $scope.getData = function(){
            mainSvc.getData().then(function(response){
                $scope.highText = response.one;
            })
        }

$scope.getData();

    });