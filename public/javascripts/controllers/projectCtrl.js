angular.module('website')
  .controller('projectCtrl', function($scope, $routeParams, $http, projectSrv){

    $scope.projects = projectSrv.getProjects();

    $scope.project = projectSrv.getProjectInfo($routeParams.pName);
    // $scope.projects = projects;
    //
    // var index = getProjectIndex($routeParams.pName);
    //
    //
    // $scope.project = projects[index];
    //
    // //this getProjectIndex function retreive the index of the object in the projects array that equal to the project Name.
    // function getProjectIndex(pName){
    //   for (var i = 0; i < projects.length; i++) {
    //     if (projects[i].projectName === $routeParams.pName){
    //       return i;
    //     }
    //     //return -1
    //   }
    // };




    /////////////////////////////////////////////////////////
    ///////////   TEST    ///////////////////////////////////
    ////////////////////////////////////////////////////////
    //console.log('index: ' + index);
    // console.log($scope.project.projectName);
    // console.log($scope.project.projectDescription);
    //
    // for (var i = 0; i < $scope.project.projectImages.length; i++) {
    //   console.log(project.projectImages[i].projectImg);
    // }

    // $scope.pName = $routeParams.pName;
    console.log('routeParams: ' + $routeParams.pName);
    // console.log('scope: ' + $scope.pName);
  });
  ////////////////////END TEST //////////////////////////




  var projects = [
    {
    projectName: 'resedential',
    projectDescription: 'resedetial description',
    projectImages: [
      {
        projectImg: 'public/residential.jpg',
        projectImgAlt: 'resedential image'
      },
      {
        projectImg: 'public/residential.jpg',
        projectImgAlt: 'resedential image'
      },
      {
        projectImg: 'public/residential.jpg',
        projectImgAlt: 'resedential image'
      },
    ]
    },
    {
      projectName: 'offices',
      projectDescription: 'offices description',
      projectImages: [
        {
          projectImg: 'public/offices.jpg',
          projectImgAlt: 'officaes image'
        },
        {
          projectImg: 'public/offices.jpg',
          projectImgAlt: 'officaes image'
        },
        {
          projectImg: 'public/offices.jpg',
          projectImgAlt: 'officaes image'
        }
      ]
    },
    {
      projectName: 'commercial',
      projectDescription: 'commercial description',
      projectImages: [
        {
          projectImg: 'public/commercial.jpg',
          projectImgAlt: 'commercial image'
        },
        {
          projectImg: 'public/commercial.jpg',
          projectImgAlt: 'commercial image'
        },
        {
          projectImg: 'public/commercial.jpg',
          projectImgAlt: 'commercial image'
        }
      ]
    },
    {
      projectName: 'tama 38',
      projectDescription: 'tama 38 description',
      projectImages: [
        {
          projectImg: 'public/tama.jpg',
          projectImgAlt: 'tama 38 image'
        },
        {
          projectImg: 'public/tama.jpg',
          projectImgAlt: 'tama 38 image'
        },
        {
          projectImg: 'public/tama.jpg',
          projectImgAlt: 'tama 38 image'
        }
      ]
    },
    {
      projectName: 'PREFAB',
      projectDescription: 'PREFAB',
      projectImages: [
        {
          projectImg: 'public/prefab.jpg',
          projectImgAlt: 'prefab image'
        },
        {
          projectImg: 'public/prefab.jpg',
          projectImgAlt: 'prefab image'
        },
        {
          projectImg: 'public/prefab.jpg',
          projectImgAlt: 'prefab image'
        }
      ]
    }
  ];
