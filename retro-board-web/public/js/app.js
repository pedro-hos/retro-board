angular
    .module('retro-board', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/board.html',
                controller: 'BoardController'
            })

            .when('/teste', {
                templateUrl: 'views/teste.html'
            })

            .otherwise({
                redirectTo: '/'
            });

    });