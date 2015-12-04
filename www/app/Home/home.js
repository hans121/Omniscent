(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('home', home);

  /* @ngInject */
  function home($scope) {
    /*jshint validthis: true */
    var vm = this
    $scope.timerRunning = true;
    $scope.timerConsole = '';

    $scope.timerType = '';



    $scope.startTimer = function (){

      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
    };
    $scope.progres = {value : 0};
    $scope.$on('timer-tick', function (event, args) {
      //console.log(args);
      $scope.progres.value = args.millis / 100;
      console.log($scope.progres)
      //b$scope.timerConsole += $scope.timerType  + ' - event.name = '+ event.name + ', timeoutId = ' + args.timeoutId + ', millis = ' + args.millis +'\n';
    });

    activate();

    function activate(){
      $scope.startTimer();
    }
  }

  home.$inject = ['$scope'];
})();
