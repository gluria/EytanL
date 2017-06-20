angular.module('website')
  .controller('projectsCtrl', function($scope){

    $scope.projects = projects;
    console.log($scope.projects[1].projectImg);
  });

  var projects = [
    {
    projectName: 'resedential',
    projectId: 001,
    projectImg: 'public/residential.jpg',
    projectImgAlt: 'resedential image'
    },
    {
      projectName: 'offices',
      projectId: 002,
      projectImg: 'public/offices.jpg',
      projectImgAlt: 'officaes image'
    },
    {
      projectName: 'commercial',
      projectId: 003,
      projectImg: 'public/commercial.jpg',
      projectImgAlt: 'commercial image'
    },
    {
      projectName: 'PREFAB',
      projectId: 005,
      projectImg: 'public/prefab.jpg',
      projectImgAlt: 'prefab image'
    },
    {
      projectName: 'tama 38',
      projectId: 004,
      projectImg: 'public/tama.jpg',
      projectImgAlt: 'tama 38 image'
    }
  ];
