(function () {

  angular.module('public')
  .controller('InfoController', InfoController);
  

  InfoController.$inject = ['PublicService', 'ApiPath'];
  function InfoController(PublicService , ApiPath) {
    var reg = this;
    reg.basePath = ApiPath;
    if(!PublicService.firstName){
      reg.fehler = true;
    }
    reg.fname = PublicService.firstName;
    reg.sname = PublicService.secondName;
    reg.email = PublicService.userEmail;
    reg.phone = PublicService.userPhone;
    reg.result = PublicService.desiredItem;
    if(reg.result) {
      console.log(reg.result.name);
      console.log(reg.result.description);
    }
    reg.desiredName = PublicService.desiredItem;
    
  }
  
  })();