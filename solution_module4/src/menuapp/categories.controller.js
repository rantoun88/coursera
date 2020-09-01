(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuDataService', 'items'];
function MenuCategoriesController(MenuDataService, items) {
  var categoriesList = this;
  categoriesList.items = items;
}

})();


// (function () {
//   'use strict';
  
//   angular.module('ShoppingList')
//   .controller('MainShoppingListController', MainShoppingListController);
  
  
//   MainShoppingListController.$inject = ['ShoppingListService', 'items'];
//   function MainShoppingListController(ShoppingListService, items) {
//     var mainlist = this;
//     mainlist.items = items;
//   }
  
//   })();
  
