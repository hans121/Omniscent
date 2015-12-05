/**
 * Created by pro on 12/4/15.
 */
angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('omniscient',{
      url: '/omniscient',
      templateUrl: 'app/omniscient/omniscient.html',
      controller : 'omniscient'
    })
  })
