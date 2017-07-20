angular.module('website')
  .controller('contactCtrl', contactCtrl);

  function contactCtrl(){
    var contact = this;

    contact.firstName = "";
    contact.lastName = "";
    contact.email = "";
    contact.phone = "";
    contact.message = "";

  }
