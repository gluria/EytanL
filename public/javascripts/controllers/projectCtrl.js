angular.module('website')
  .controller('projectCtrl', function($scope, $routeParams, $http, projectSrv){

    $scope.projects = projectSrv.getProjects();

    $scope.project = projectSrv.getProjectInfo($routeParams.pName);

  });
  
