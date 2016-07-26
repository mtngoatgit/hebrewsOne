angular
    .module('hebrewApp')
    .directive('backgroundDir', function(){
        return{
        restrict: 'A',
        link:function(scope, element, attrs){
            $('#camera-icon').click(function(){
            $("body").toggleClass("surfer")
            })
        }
    }
    })