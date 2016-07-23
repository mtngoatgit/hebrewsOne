angular
    .module("hebrewApp")
    .directive("textHighlightDir", function(){
        return {
            restrict: 'A',
            // controller: function($scope, mainSvc){
            //     $scope.getData = mainSvc.getData().then(function(response){
            //         $scope.commentary = response.one.linguistic;
            //     })
            // },
            scope: {
                circumflex: '='
            },
            link: function(scope, element, attrs) {
                    function splitString(stringToSplit, separator){
                        var arrayOfStrings = stringToSplit.split(separator);
                        return arrayOfStrings;
                    }
                    var space= " ";
                    scope.newCommentary = splitString(this, space);
            
                    for (var i = 0; i < scope.newCommentary.length; i++){
                        if(scope.newCommentary.charAt[0] === '^'){
                            attrs.css("background-color", "red");
                        }//end of if statement
                    }//end of for loop
            }//end of link
        }//end of return
    })//end of directive



// I WANT TO BE ABLE TO EXPORT FUNCTIONALITY 