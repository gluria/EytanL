//this controller hande the view of the carousel, this is the image slide show.
angular.module('website')
  .controller('carouselCtrl', function($scope, $routeParams, projectsSrv){

    //var i holds the index of the selected project in the projects array.
    var i = projectsSrv.getProjectsIndex($routeParams.pName);
      console.log('carousel project images index: ' + i);

    $scope.project = projectsSrv.getProjectInfo($routeParams.pName);

    $scope.projects = projectsSrv.getProjects()[i];
      console.log('carousel project name: ' + $scope.project);

    $scope.slides = projectsSrv.getProjects()[i].projectImages;

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
