/**
 * Created by pro on 12/4/15.
 */
angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
      url: '/home',
      templateUrl: 'app/Home/home.html',
      controller : 'home',
      controllerAs : "vm"
    })
  })
