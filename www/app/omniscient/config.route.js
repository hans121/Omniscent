/**
 * Created by pro on 12/4/15.
 */
angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('list',{
      url: '/list',
      templateUrl: 'app/list/list.html',
      controller : 'list'
    })
  })
