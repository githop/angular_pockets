'use strict';

/**
 * @ngdoc function
 * @name ngFdnApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the ngFdnApp
 */
angular.module('ngFdnApp')
  .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'politician',
  function($scope, $modalInstance, politician) {
      $scope.politician = politician;

      $scope.ok = function() {
        $modalInstance.close();
      };

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };

      function displayData(poli) {
        var data = [];
        var sum = 0;
        angular.forEach(poli.contributions, function(item) {
          data.push([item.org_name, item.total]);
          sum += item.total;
        });
        $scope.politician.chartData = data;
        $scope.politician.total = sum;
      }

      displayData($scope.politician);

 }]);
