angular.module('retro-board')
    .factory('cardService', ['$resource', function ($resource) {

        return $resource('cards/:params', {}, {});

    }]);