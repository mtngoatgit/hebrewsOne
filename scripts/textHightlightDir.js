angular
    .module("hebrewApp")
    .directive("textHighlightDir", function(){
        return {
            restrict: 'A',
            scope: {

            },
            controller: function($scope, mainSvc){
                $scope.getData = mainSvc.getData();
            },
            link: function(scope, element, attrs) {
                scope.getData.then(function(response){
                    scope.newText = response.linguistic;

                for (var prop in linguistic) {
                    if()
                }


                }) 
            }
        }




    })


     scope: {
                lesson: "=",
                dayAlert: "&"
            },
            controller: function($scope, lessonSvc){
                $scope.getSchedule = lessonSvc.getSchedule()
                },
            link: function(scope, element, attributes){
                scope.getSchedule.then( function(response){
                    scope.schedule= response.data;