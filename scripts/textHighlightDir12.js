    angular
    .module("hebrewApp")
    .directive("textHighlightDirTwelve", function(){
        return {
            restrict: 'A',
            controller: function($scope, mainSvc){
                $scope.getData = mainSvc.getData();
            },
            link: function(scope, element, attrs) {

                function splitString(stringToSplit, separator){
                    var arrayOfStrings = stringToSplit.split(separator);
                    return arrayOfStrings
                }

                scope.getData.then(function(response){
                    scope.ling = response.twelve.linguistic;

                    var space= " ";
                    var newGreek = splitString(scope.ling, space);

                    for (var i = 0; i < newGreek.length; i++ ){
                        if(newGreek[i].charAt(0) === '`'){
                           newGreek[i] = "<span style='color: #2a3132; font-size: 25px'>" + newGreek[i] + "</span>"
                        }
                    }

                var greek = newGreek.join(' ');
                $('#highlight').html(greek);
                })
            }
        }
    })