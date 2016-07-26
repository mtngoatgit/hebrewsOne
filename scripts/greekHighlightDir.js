angular
    .module('hebrewApp')
    .directive('greekHighlightDir', function(){
        return{
            restrict: 'A',
            // controller: function($scope, mainSvc){
            //     $scope.getData = mainSvc.getData();
            // },
            link: function(scope, element, attrs){

                 

                var words = $('.tyler').first().text().split( /\s+/ );
                var text = words.join ("</span> <span>");
                $('tyler').first().html( "<span>" + text + "</span>");
                $("span").on('click', function() {
                    $(this).css( "background-color", "yellow");
                })


            }
        }
    })