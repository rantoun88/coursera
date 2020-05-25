(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST 1
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  
  toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyItems();

  
  toBuyCtrl.buyItem = function(item) {
    ShoppingListCheckOffService.buyItem(item);
  }
}


// LIST 2
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCtrl = this;
  
  alreadyBoughtCtrl.alreadyBoughtList = ShoppingListCheckOffService.getBoughtItems();
  
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name : 'bonbons',
      quantity: 7
    },
    {
      name : 'chocolate',
      quantity: 15
    },
    {
      name : 'chips',
      quantity: 10
    },
    {
      name : 'cookies',
      quantity: 10
    },
    {
      name : 'ice cream',
      quantity: 10
    }
  ];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.buyItem = function(item) {
    service.removeItem(item);
    service.addItem(item.name , item.quantity);
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
