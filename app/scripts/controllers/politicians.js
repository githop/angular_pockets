'use strict';

/**
 * @ngdoc function
 * @name ngFdnApp.controller:PoliticiansCtrl
 * @description
 * # PoliticiansCtrl
 * Controller of the ngFdnApp
 */
angular.module('ngFdnApp')
  .controller('PoliticiansCtrl', ['$scope', '$modal', 'poliFactory', 'driveAPI',
   function($scope, $modal, poliFactory, driveAPI) {
      $scope.banner = {
        img: '../images/banner.png',
        show: true
      };

	   $scope.states = [{ 'name':'AL'},{ 'name':'AK'},{ 'name':'AZ'},{ 'name':'AR'},{ 'name':'CA'},{ 'name':'CO'},{ 'name':'CT'},{ 'name':'DE'},{ 'name':'FL'},{ 'name':'GA'},{ 'name':'HI'},{ 'name':'ID'},{ 'name':'IL'},{ 'name':'IN'},{ 'name':'IA'},{ 'name':'KS'},{ 'name':'KY'},{ 'name':'LA'},{ 'name':'ME'},{ 'name':'MD'},{ 'name':'MA'},{ 'name':'MI'},{ 'name':'MN'},{ 'name':'MS'},{ 'name':'MO'},{ 'name':'MT'},{ 'name':'NE'},{ 'name':'NV'},{ 'name':'NH'},{ 'name':'NJ'},{ 'name':'NM'},{ 'name':'NY'},{ 'name':'NC'},{ 'name':'ND'},{ 'name':'OH'},{ 'name':'OK'},{ 'name':'OR'},{ 'name':'PA'},{ 'name':'RI'},{ 'name':'SC'},{ 'name':'SD'},{ 'name':'TN'},{ 'name':'TX'},{ 'name':'UT'},{ 'name':'VT'},{ 'name':'VA'},{ 'name':'WA'},{ 'name':'WV'},{ 'name':'WI'},{ 'name':'WY'}];

      //typeahead
      $scope.typeahead = function(val) {
        return poliFactory.searchDb(val.titleize())
          .then(function(res) {
            var poli = [];
            angular.forEach(res.data, function(item) {
              poli.push(item.name);
            });
            return poli;
          });
      };

      //search results
      $scope.searchResults = function(name) {
        clearBanner();
        poliFactory.searchDb(name)
          .success(function(data) {
            $scope.politicians = data;
            fetchThumbs(data);
          });
      };

      //return politicians from state dropdown
      $scope.selectState = function(state) {
        clearBanner();
        poliFactory.fromState(state.name)
          .success(function(data) {
            $scope.politicians = data;
            fetchThumbs(data);
          });
      };

      //open modal for politician
      $scope.open = function(poli) {
        poliFactory.getContributions(poli.id)
          .success(function(data) {
            $scope.politician = data;
            var modalInstance = $modal.open({
              templateUrl: 'views/myModalContent.html',
              controller: 'ModalInstanceCtrl',
              resolve: {
                politician: function() {
                  return $scope.politician;
                }
              }
            });
          });

      };

      //return thumbs for politicians
      function fetchThumbs(data) {
        angular.forEach(data, function(item) {
          item.img = '../images/loading.gif';
          driveAPI.getThumb(item.drive_id)
            .success(function(data) {
              item.img = data.thumbnailLink;
            })
            .error(function() {
              item.img = '../images/nopic.png';
            });
        });
      }

      function clearBanner() {
        $scope.banner.show = false;
      }


   }]);
