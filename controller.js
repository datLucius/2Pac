(function() {
  'use strict';
    angular
      .module('2Pac')
      .controller('MainController', function ($scope, PostService, $rootScope){
        PostService.getPosts().success(function (posts) {
          $scope.posts = posts;
        });
        
      })
}());
