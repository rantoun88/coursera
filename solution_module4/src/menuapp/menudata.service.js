(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// MenuDataService.$inject = ['$q', '$timeout']
MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;
  var items =[];
   service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

  return response.then(function (result) {
  var list = Object.values(result.data);
   items = list;
   console.log(items);
   return items;
  });
  }

  service.getItemsForCategory = function (categoryShortName) {
    var foundItems = []
    console.log(categoryShortName);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    return response.then(function (result) {
      var menuItems = result.data;
      var list = Object.values(menuItems);
      list[0].forEach(element => {
      var elem = Object.values(element);
      if(elem[1].includes(categoryShortName)) {
        foundItems.push(element);
      }
    });
    console.log(foundItems.length);
    console.log(foundItems);
        return foundItems;
  });
  };  
}


})();
