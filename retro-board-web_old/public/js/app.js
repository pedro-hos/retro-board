angular
    .module('retro-board', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/board.html',
                controller: 'BoardController'
            })

            .otherwise({
                redirectTo: '/'
            });

    });
