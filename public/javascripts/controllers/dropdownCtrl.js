/*his controller control the project dropdown list at the navbar.
the controller load the project list from the projecs.json file.*/
angular.module('website')
  .controller('DropdownCtrl', function($scope){

    $scope.project = projects;
});

var projects = [
  {
  projectName: 'resedential',
  projectId: 001,
  projectImg: 'public/resedetial.jpeg',
  projectImgAlt: 'resedential image'
  },
  {
    projectName: 'offices',
    projectId: 002,
    projectImg: 'public/offices.jpeg',
    projectImgAlt: 'officaes image'
  },
  {
    projectName: 'commercial',
    projectId: 003,
    projectImg: 'public/commercial.jpeg',
    projectImgAlt: 'commercial image'
  },
  {
    projectName: 'tama 38',
    projectId: 004,
    projectImg: 'public/tama.jpeg',
    projectImgAlt: 'tama 38 image'
  },
  {
    projectName: 'PREFAB',
    projectId: 005,
    projectImg: 'public/prefab.jpeg',
    projectImgAlt: 'prefab image'
  }
];
