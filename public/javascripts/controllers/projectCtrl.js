angular.module('website')
  .controller('projectCtrl', function($scope, $routeParams, projectsSrv){

    $scope.projects = projectsSrv.getProjects();
    console.log($scope.projects);

    $scope.project = projectsSrv.getProjectInfo($routeParams.pName);

  });
