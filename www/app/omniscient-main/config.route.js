/**
 * Created by pro on 12/4/15.
 */
angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('omni_main',{
      url: '/omniscient/main',
      templateUrl: 'app/omniscient-main/omni_main.html',
      controller : 'omni_main'
    })
  })
