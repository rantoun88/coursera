(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('listItemDescription', ListItemDescription)
  .directive('foundItems', FoundItems);
  
  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        list: '=items'
      }
    };
  
    return ddo;
  }
  
  
  function ListItemDescription() {
    var ddo = {
      template: '{{ item.name }} '
    };
  
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchTerm = "";
    
  
      controller.log = function(search) {
        if(search === '') {
          controller.menu = [];
        }
        else {
          var promise = MenuSearchService.getMatchedMenuItems(search);
          promise.then(function(response){
           controller.menu = response;
          }).catch(function (error) {
             console.log("Something went terribly wrong.");
            });
        }
      }

      controller.removeItem = function (itemIndex) {
        MenuSearchService.removeItem(itemIndex);
      };
  }
  
  
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var foundItems = []

     service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return response.then(function (result) {
        var menuItems = result.data;
        var list = Object.values(menuItems);
       console.log(list[0].length);
       list[0].forEach(element => {
         var elem = Object.values(element);
         if(elem[3].includes(searchTerm)) {
           foundItems.push(element);
         }
       });
       console.log(foundItems.length);
        return foundItems;
    });
    }

    service.removeItem = function (itemIndex) {
      foundItems.splice(itemIndex, 1);
    };  
  }
  
  })();
  