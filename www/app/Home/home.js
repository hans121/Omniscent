(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('home', home);

  /* @ngInject */
  function home($scope,$state) {
    /*jshint validthis: true */
    $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
    };

    $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      setTimeout(function(){$state.go('list')},500);
    };

    $scope.$on('timer-tick', function (event, args) {
      //console.log(args);
      if(args.millis / 50 >= 100)
        $scope.stopTimer();
      //b$scope.timerConsole += $scope.timerType  + ' - event.name = '+ event.name + ', timeoutId = ' + args.timeoutId + ', millis = ' + args.millis +'\n';
    });


  }

  home.$inject = ['$scope','$state'];
})();
