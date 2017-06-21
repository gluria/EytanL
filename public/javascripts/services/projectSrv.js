angular.module('website')
  .factory('projectSrv', function(){
    var factory = {};

    //getProjectInfo factory recieve a project name and return an project
    //object from an array of projects
    factory.getProjectInfo = function(pName){
      return projects[getProjectIndex(pName)];
    },

    //getProjects factory return the projects array
    factory.getProjects = function(){
      return projects;
    },
    //getProjectIndex factory recieve the project name and return the project index in the project array
    factory.getProjectIndex = function(pName){
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
    };//end of getProjectIndex function

    return factory;

  });//end of projectSrv factory



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
