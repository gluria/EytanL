angular.module('website')
  .controller('carouselCtrl', function($scope, $routeParams, projectSrv){

    var i = projectSrv.getProjectIndex($routeParams.pName);
      console.log('carousel project images index: ' + i);

    $scope.project = projectSrv.getProjects()[i];
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


  });// end of carouselCtrl
