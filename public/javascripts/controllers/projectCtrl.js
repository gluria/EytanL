angular.module('website')
  .controller('projectCtrl', function($scope, $routeParams, projectsSrv){

    //this var the object containing all the projects information.
    $scope.projects = projectsSrv.getProjects();

    //this var holds the project information for a specific project in the projects object.
    $scope.project = projectsSrv.getProjectInfo($routeParams.pName);

  });
