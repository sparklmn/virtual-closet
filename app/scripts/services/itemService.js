'use strict';

angular.module('virtualClosetApp')
    .factory('ItemService', function ($resource) {
        return $resource('items/:itemId', {
            itemId: '@_id'
        }, {
            update: {
                method: 'PUT'
            },
            save: {
                method: 'POST'
            }
        });
    });
