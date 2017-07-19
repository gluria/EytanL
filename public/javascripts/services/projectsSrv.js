/*
the projects object is an array of projects.
the projectsSrv service holds the following functions that handle information on the projects object:
  1. getProjects - retrieve the entire projects object.
  2. getProjectInfo - retrieve a project object form the projects array object base on its projectName.
  3. getProjectsIndex - retrieve the index of a project object in the projects array base on it projectName.
*/
angular.module('website')
  .service('projectsSrv', projectsSrv);

  projectsSrv.$inject = ['$http'];

  function projectsSrv($http) {

    //declaring a projects array that will hold the the projects array retrieved from the projects.json file
    var projects = [];

    //this function chack if the projects array is empty.
    function isProjectsEmpty(){
      var isEmpty = false;
      if (projects.length === 0) {
        isEmpty = true;
      }
      return isEmpty;
    }//projectsEmpty

    //retrieve the projects array from the projects.json file.
    function getProjectsArray() {
      $http.get("/public/projects.json").then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          projects.push(response.data[i]);
        }//for
      });//end of $http
    }

    var service = this;

    //retrieve the entire projects object
    service.getProjects = function() {
      if (isProjectsEmpty()) {
        getProjectsArray();
      }
      return projects;
    }

    //getProjectInfo factory recieve a project name and return an project
    //object from an array of projects
    service.getProjectInfo = function(pName){
      if (isProjectsEmpty()) {
        getProjectsArray();
      }
      return projects[getProjectIndex(pName)];
    }

    //getProjectIndex factory recieve the project name and return the project index in the project array
    service.getProjectsIndex = function(pName){
      if (isProjectsEmpty()) {
        getProjectsArray();
      }
      return getProjectIndex(pName);

    }
    //this helper function get a project name val and return the instance of the
    //project in the projects array.
    function getProjectIndex(pName){
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].projectName === pName){
          return i;
        }// end of if condition
      }// end of for loop
    }//end of getProjectIndex function

  }//projectsSrv service
