(function() {
  'use strict';
    angular
      .module('2Pac', [
        'ngRoute'
      ])
      .config('MainController', function ($routeProvider){
        $routeProvider
          .when('/', {
            templateUrl: 'timer.html',
            controller: 'MainController'
          })
          .when('/comments', {
            templateUrl: 'comments.html',
            controller: 'MainController'
          })
          .when('/media', {
            templateUrl: 'media.html',
            controller: 'MainController'
          })
          .when('/404', {
            template: '<h1>RIP</h1>'
          })
          .otherwise({
            redirectTo: '/404'
          })
    })
}());
