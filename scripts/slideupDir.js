angular.module('hebrewApp').directive('slideDir', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            $('.comm-togg').on('click', function(){
                $('.ling-comm').slideToggle();
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

            //  $("#home-butt").hover(function(){
            //     $(this).css("background-color", "#2a3132");
            // }, function(){
            //     $(this).css("background", "none")
            // })

            $(".comm-togg").hover(function(){
                $(this).css("background-color", "#e85530")
                .css("cursor", "pointer");
            }, function(){
                $(this).css("background", "none")
            })
                $(function() {        
		    $(".welcome-word").typed({
			    strings: ["welcome..."],
			    typeSpeed: 30,
			    showCursor: false
		    });
            })
               $(function() {        
		    $(".choose-verse").typed({
			    strings: ["choose verses here"],
			    typeSpeed: 10,
			    showCursor: false
		    });
            })
        
    }//end of link
}
})