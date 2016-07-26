angular
    .module("hebrewApp")
    .directive("textHighlightDir", function(){
        return {
            restrict: 'A',
            // scope: {
            //     circumflex: '='
            // },
            controller: function($scope, mainSvc){
                $scope.getData = mainSvc.getData();
            },
            link: function(scope, element, attrs) {

                // console.log(scope.getData);

                function splitString(stringToSplit, separator){
                    var arrayOfStrings = stringToSplit.split(separator);
                    return arrayOfStrings
                }
                
                scope.getData.then(function(response){
                    scope.ling = response.one.linguistic;

                    var space= " ";
                    var newGreek = splitString(scope.ling, space);

                    for (var i = 0; i < newGreek.length; i++ ){
                        if(newGreek[i].charAt(0) === '^'){
                           newGreek[i] = "<span id='high'>" + newGreek[i] + "</span>"
                           $('span').css('color', 'red')
                            
                        }
                    }

                scope.newGreek = newGreek.join(' ');
                })
            }
                

               
              
               




                   
            }//end of link
        }//end of return
    )//end of directive



// // I WANT TO BE ABLE TO EXPORT FUNCTIONALITY


// scope.verse1.linguistic 
// [i] = <span> + new word without circumflx + </span>


// js replace() find and replace with nothing