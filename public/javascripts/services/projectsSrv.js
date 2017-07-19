angular.module('website')
  .service('projectsSrv', projectsSrv);

  projectsSrv.$inject = ['$http'];

  function projectsSrv($http) {

    var projects = [];

    function isProjectsEmpty(){
      var isEmpty = false;
      if (projects.length === 0) {
        isEmpty = true;
      }
      return isEmpty;
    }//projectsEmpty

    function getProjectsArray() {
      $http.get("/public/projects.json").then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          projects.push(response.data[i]);
        }//for
      });//end of $http
    }

    var service = this;

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
      // console.log(pName);
      // console.log(getProjectIndex(pName));
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
      console.log(projects.length);
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].projectName === pName){
          return i;
        }// end of if condition
      }// end of for loop
    }//end of getProjectIndex function

  }//projectsSrv service
