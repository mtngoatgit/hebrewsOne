angular.module('hebrewApp').directive('movieDir', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            $('.climb').on('click', function(){
                    $(".climb-video").show();
                    $(".esc-movie").show();
                    $('.ref-arrow').hide();
            })

            $('.run').on('click', function(){
                    $(".run-video").show();
                    $(".esc-movie").show();
                    $('.ref-arrow').hide();
            })

            $('.sail').on('click', function(){
                    $(".sail-video").show();
                    $(".esc-movie").show();
                    $('.ref-arrow').hide();
            })

            $('.bravado').on('click', function(){
                    $(".bravado-video").show();
                    $(".esc-movie").show();
                    $('.ref-arrow').hide();
            })

            $('.esc-movie').hover(function(){
                    $(this).css('cursor', 'pointer');
            })

            $('.esc-movie').on('click', function(){
                    $('.climb-video').hide();
                    $(this).hide();
                    $('.ref-arrow').show();
            })

            $('.esc-movie').on('click', function(){
                    $('.run-video').hide();
                    $(this).hide();
                    $('.ref-arrow').show();
            })

            $('.esc-movie').on('click', function(){
                    $('.sail-video').hide();
                    $(this).hide();
                    $('.ref-arrow').show();
            })

            $('.esc-movie').on('click', function(){
                    $('.bravado-video').hide();
                    $(this).hide();
                    $('.ref-arrow').show();
            })

        }
    }
    })