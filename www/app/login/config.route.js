/**
 * Created by pro on 12/4/15.
 */
angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('login',{
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller : 'login'
    })
  })
