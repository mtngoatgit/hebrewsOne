angular
    .module('hebrewApp')
    .directive('greekHighlightDir', function(){
        return {
            template: ('<div class="alteredText">{{ling}}...</div>'),
            controller: function($scope, mainSvc){
                $scope.getData = mainSvc.getData().then(function(response){
                    $scope.ling = response.one.linguistic
                    }
                )
            },
            link: function(scope, element, attrs){
                setTimeout(function() {
                $('.alteredText').each(function(){
                    console.log($('.craig'))
                    $(this).html(
                        $(this).html().replace(/and/g, '<span style="color:#e85530;font-size:30px">and</span>')
                    )
                })
                 }, 500);    
            }
            }
    })