(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['myItems'];
function ItemsController(myItems) {
  var categoryItems = this;
  console.log('items', myItems);
  categoryItems.myCategoryItems = myItems;
}

})();



// (function () {
//   'use strict';
  
//   angular.module('ShoppingList')
//   .controller('ItemDetailController', ItemDetailController);
  
  
//   ItemDetailController.$inject = ['$stateParams', 'items'];
//   function ItemDetailController($stateParams, items) {
//     var itemDetail = this;
//     var item = items[$stateParams.itemId];
//     itemDetail.name = item.name;
//     itemDetail.quantity = item.quantity;
//     itemDetail.description = item.description;
//   }
  
//   })();
