angular.module('hebrewApp').directive('movieDir', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            $('.climb').on('click', function(){
                    $(".climb-video").show()
            })

            $('.run').on('click', function(){
                    $(".run-video").show()
            })

            $('.sail').on('click', function(){
                    $(".sail-video").show()
            })

            $('.bravado').on('click', function(){
                    $(".bravado-video").show()
            })
        }
    }
    })