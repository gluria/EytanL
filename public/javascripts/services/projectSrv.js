angular.module('website')
  .factory('projectSrv', function(){
    var factory = {};
    factory.getProjectInfo = function(pName){
      return projects[getProjectIndex(pName)];
    },
    factory.getProjects = function(){
      return projects;
    }
    return factory;
    //getProjectInfo function recieve a project name and return an project
    //object from an array of projects

    //this helper function get a project name val and return the instance of the
    //project in the projects array.
    function getProjectIndex(pName){
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].projectName === pName){
          return i;
        }
        //return -1
      }
    };
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
