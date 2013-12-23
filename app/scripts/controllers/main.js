'use strict';

angular.module('virtualClosetApp')
    .controller('MainCtrl', function ($scope, ItemService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.init = function () {
            $scope.items = ItemService.query();
        };

        $scope.init();
    });
