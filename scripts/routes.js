angular
    .module('hebrewApp')
    .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

            //We need to configure our routes here

        $stateProvider
            .state('home', {
                    url: "/",
                    templateUrl: "views/home.html",
                 //don't think I need a controller for this, at least not yet
            })
            .state('wtf', {
                    url: "/wtf",
                    templateUrl: "views/wtf.html",
            })
            .state('resources', {
                    url: "/resources",
                    templateUrl: "views/resources.html",
            })
            .state('verses1-3', {
                    url: "/verses1-3",
                    templateUrl: "views/verses1-3.html",
                    controller:"verse1Ctrl"
            })
             .state('verses4-7', {
                    url: "/verses4-7",
                    templateUrl: "views/verses4-7.html",
                    controller:"verse4Ctrl"
            })
             .state('verses8-11', {
                    url: "/verses8-11",
                    templateUrl: "views/verses8-11.html",
                    controller:"verse8Ctrl"
            })
             .state('verses12-14', {
                    url: "/verses12-14",
                    templateUrl: "views/verses12-14.html",
                    controller:"verse12Ctrl"
            })
             .state('studyBreak', {
                    url: "/studyBreak",
                    templateUrl: "views/studyBreak.html",
            })


    })//end of routes