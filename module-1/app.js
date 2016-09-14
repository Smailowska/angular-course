(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.food = "";
    $scope.totalValue = 0;
    $scope.foodStatus = "";

        $scope.calculateFood = function(){
        //Check if input field is empty
        if($scope.food.length == 0)
        {
            $scope.foodStatus = "Empty!";
            // Assign total value to 0 if field is empty
            $scope.totalValue = 0;
        }
        else{
        $scope.totalValue = calculateWordNumber($scope.food);
        $scope.foodStatus = isTooMuch($scope.totalValue, 3);
        }
  }
    function calculateWordNumber(string){
      var totalWordNumber = 0;
      //Check if there are unnecessary commas in a string and replace with only one comma.
      string = string.replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',');

      //Parse string into an array, comma delimited.
      totalWordNumber = string.trim().split(',').length;
      return totalWordNumber;
    }
    function isTooMuch(totalValue, maxValue){
      var returnStatement = "";
      if(totalValue > maxValue)
      {
        returnStatement = "Too much!";
      }
      else
      {
        returnStatement = "Enjoy!";
      }
      return returnStatement;
    }
  };

})();
