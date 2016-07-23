angular
    .module("hebrewApp")
    .directive("textHighlightDir", function(){
        return {
            restrict: 'A',
            controller: function($scope, mainSvc){
                $scope.getData = mainSvc.getData().then(function(response){
                    $scope.commentary = response.one.linguistic;
                })
            },
            link: function(scope, element, attrs) {
                
                scope.commentary.then(function(response){
                    function splitString(stringToSplit, separator){
                        var arrayOfStrings = stringToSplit.spli(separator);
                        return arrayOfStrings;
                    }
                    var space= " ";
                    scope.newCommentary = splitString(response, space);
            
                    for (var i = 0; i < scope.newCommentary.length; i++){
                        if(scope.newCommentary.charAt[0] === '^'){
                            attrs.css("background-color", "red");
                        }//end of if statement
                    }//end of for loop
                })//end of scope.commentary
            }//end of link
        }//end of return
    })//end of directive

