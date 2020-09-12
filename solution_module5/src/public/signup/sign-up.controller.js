(function () {

  angular.module('public')
  .controller('SignUpController', SignUpController);
  

  SignUpController.$inject = ['PublicService'];
  function SignUpController(PublicService) {
    var reg = this;
  
    reg.submit = function () {
      reg.completed = true;
      var short = reg.user.short;
      PublicService.saveInfos(reg.user.username , reg.user.username1 ,reg.user.email , reg.user.phone);
      var response = PublicService.getDesiredMenuItem(short);
      response.then(function(result) {
        reg.responseMark = true;
      }).catch(function(error) {
        reg.responseMark = false;
      })
    };
  }
  
  })();