(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchListController', LLController);
  
  LLController.$inject = ['$scope'];
  function LLController($scope) {
  $scope.number = 0;
  $scope.str = null;
  $scope.message = "";
  $scope.countItems = function () {

    var totalTextBoxValue = $scope.str;
    if( $scope.str !== null) {
      const textBoxArray = totalTextBoxValue.split(',');
      $scope.number = textBoxArray.length;
    }

    $scope.message = getSuitableMessage();

    function getSuitableMessage() {
      var message = "";
      if ($scope.number > 3 ) {
        message = "Too much!";
      }
       else if($scope.number <= 3 && $scope.number > 0){
        message = "Enjoy!" ;
      }
      else if($scope.number === 0){
        message =  "Please enter data first";
      }

      return message;
    }
   
  };

  }
  
  })();