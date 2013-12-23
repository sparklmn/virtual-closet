'use strict';

angular.module('virtualClosetApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/new', {
                templateUrl: 'views/itemNew.html',
                controller: 'ItemNewCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'views/itemEdit.html',
                controller: 'ItemEditCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


