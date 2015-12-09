(function() {
  'use strict';

  angular
    .module('app.omniscient')
    .controller('omniscient', omniscient);

  /* @ngInject */
  function omniscient($scope, $state) {
    /*jshint validthis: true */
    $scope.gomain = function(){
      $state.go('omni_main');
    }

  }

  omniscient.$inject = ['$scope','$state'];
})();
