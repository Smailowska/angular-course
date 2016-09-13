(function(){
  'use strict';
  angular-module('LunchCheck' [])
  .controller('TxtController', TxtController);

TxtController.$inject = [$scope];
function TxtController($scope){
    $scope.food = "Kokica";
  };

})();
