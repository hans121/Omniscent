(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('login', login);

  /* @ngInject */
  function login($scope, $state) {
    /*jshint validthis: true */
    $scope.goOmniscient = function(){
      $state.go('omniscient')
    }

  }

  login.$inject = ['$scope','$state'];
})();
