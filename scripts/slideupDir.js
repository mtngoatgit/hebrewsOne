angular.module('hebrewApp').directive('slideDir', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            $('.comm-togg').on('click', function(){
                $('.ling-comm').toggle()
                })
            
            $('.verse-nav-butt').hover(function(){
                $(this).css("background-color", "#2a3132");
            }, function(){
                $(this).css("background-color", "#e85530")
            })

            $(".nav-butt").hover(function(){
                $(this).css("background-color", "#2a3132");
            }, function(){
                $(this).css("background-color", "#e85530")
            })

             $("#home-butt").hover(function(){
                $(this).css("color", "#2a3132");
            }, function(){
                $(this).css("color", "white")
            })

            $(".comm-togg").hover(function(){
                $(this).css("background-color", "#2a3132")
                .css("cursor", "pointer");
            }, function(){
                $(this).css("background", "none")
            })

            $(".english-container").hover(function(){
                $(this).css("background-color", "#E85530");
            }, function(){
                $(this).css("background", "none")
            })

             $(".greek-container").hover(function(){
                $(this).css("background-color", "#E85530");
            }, function(){
                $(this).css("background", "none")
            })
             $(".ling-comm").hover(function(){
                $(this).css("background-color", "#E85530")
            }, function(){
                $(this).css("background", "none")
            })

              $(".phil-comm").hover(function(){
                $(this).css("background-color", "#E85530");
            }, function(){
                $(this).css("background", "none")
            })

              $(".climb").hover(function(){
                $(this).css("background-color", "#2a3132")
                .css("cursor", "pointer");
                $(this).css("color", "white");
            }, function(){
                $(this).css("background", "none")
                $(this).css("color", "#2a3132");
            })
              $(".run").hover(function(){
                $(this).css("background-color", "#2a3132")
                .css("cursor", "pointer");
                $(this).css("color", "white");
            }, function(){
                $(this).css("background", "none")
                $(this).css("color", "#2a3132");
            })
              $(".sail").hover(function(){
                $(this).css("background-color", "#2a3132")
                .css("cursor", "pointer");
                $(this).css("color", "white");
            }, function(){
                $(this).css("background", "none")
                $(this).css("color", "#2a3132");
            })
              $(".bravado").hover(function(){
                $(this).css("background-color", "#2a3132")
                .css("cursor", "pointer");
                $(this).css("color", "white");
            }, function(){
                $(this).css("background", "none")
                $(this).css("color", "#2a3132");
            })


            
            //  $(".wtf-container").hover(function(){
            //     $(this).css("background-color", "gray");
            // }, function(){
            //     $(this).css("background", "none");
            // })


                    
            
            

    }//end of link
}
})