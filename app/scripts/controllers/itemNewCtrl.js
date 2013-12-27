'use strict';

angular.module('virtualClosetApp')
    .controller('ItemNewCtrl', function ($scope, ItemService) {
        $scope.item = {category: 'tops', subCategory: 'sweaters', name: 'red sweater'};

        $scope.add = function () {

            ItemService.$save($scope.item);
        };

    });
