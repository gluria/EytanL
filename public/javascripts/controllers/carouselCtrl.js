angular.module('website')
  .controller('carouselCtrl', function($scope, $routeParams){

    var i = getProjectIndex($routeParams.pName);
      console.log('carousel project images index: ' + i);

    $scope.project = projects[i];
      console.log('carousel project name: ' + $scope.project.projectName);

    $scope.slides = projects[i].projectImages;

    $scope.currentIndex = 0;

    $scope.setCurrentIndex = function(index){
      $scope.currentIndex = index;
    };

    $scope.isCurrentIndex = function(index){
      return $scope.currentIndex === index;
    };

    $scope.nextSlide = function(){
      console.log('next please');
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
      return false;
    };

    $scope.prevSlide = function(){
      console.log('prev please');
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
      return false;
    };

    function getProjectIndex(pName){
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].projectName === $routeParams.pName){
          return i;
        }
        //return -1
      }
    };
  });// end of carouselCtrl


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
