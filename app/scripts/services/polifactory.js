'use strict';

/**
 * @ngdoc service
 * @name ngPadPocApp.poliFactory
 * @description
 * # poliFactory
 * Factory in the ngPadPocApp.
 */
angular.module('ngFdnApp')
  .factory('poliFactory', ['$http', function($http) {
    var baseUrl = 'http://localhost:3000/politicians';
    //var baseUrl = '/politicians';
    var poliFactory = {};

    poliFactory.getPoliticians = function() {
      return $http.get(baseUrl);
    };

    poliFactory.searchDb = function(name) {
      return $http.get(baseUrl, {
        params: {
          starts_with: name
        }
      });
    };

    poliFactory.fromState = function(state) {
      return $http.get(baseUrl, {
        params: {
          from_state: state
        }
      });
    };

    poliFactory.getContributions = function(pid) {
      return $http.put(baseUrl + '/' + pid);
    };

    return poliFactory; 
  }]);
