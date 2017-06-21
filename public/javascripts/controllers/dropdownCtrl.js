/*his controller control the project dropdown list at the navbar.
the controller load the project list from the projecs.json file.*/
angular.module('website')
  .controller('DropdownCtrl', function($scope, projectSrv){

    $scope.project = projectSrv.getProjects();
});
