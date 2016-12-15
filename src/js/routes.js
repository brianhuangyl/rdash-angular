'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('faceBoard', {
                url: '/face-board',
                templateUrl: 'templates/face-board.html'
            })
            .state('faceBoard.profile', {
                url: '/face-board/{:id}',
                templateUrl: 'templates/profile.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }
]);
