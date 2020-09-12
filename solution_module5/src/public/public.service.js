(function () {
  "use strict";
  
  angular.module('public')
  .service('PublicService', PublicService);
  
  
  PublicService.$inject = ['$http', 'ApiPath'];
  function PublicService($http, ApiPath) {
    var service = this;
    
  
    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };
  
  
    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }
  
      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };


   service.saveInfos = function(fname, lname , email , phone) {
     service.firstName = fname;
     service.secondName = lname;
     service.userEmail = email;
     service.userPhone = phone;
   }

    service.getDesiredMenuItem = function(shortName) {
      var response = $http.get(ApiPath + '/menu_items/' + shortName + '.json');

      return response.then(function(result) {
        service.desiredItem = result.data;
        // var vv = result.data;
        // console.log(vv.name);
        return result.data;
      });
    }
  
  }
  

  
  })();
  