(function() {
  'use strict';

  angular
    .module('app.list')
    .controller('list', list);

  /* @ngInject */
  function list($scope, $state) {
    /*jshint validthis: true */
    $scope.goOmniscient = function(){
      $state.go('login')
    }

  }

  list.$inject = ['$scope','$state'];
})();
