'use strict';

/**
 * @ngdoc service
 * @name ngPadPocApp.driveAPI
 * @description
 * # driveAPI
 * Factory in the ngPadPocApp.
 */
angular.module('ngFdnApp')
  .factory('driveAPI', ['$http', function($http) {

    var APIKey = ''; 
    var baseUrl = 'https://www.googleapis.com/drive/v2/files/';
    var driveFactory = {};

    driveFactory.getThumb = function(fileId) {
      return $http.get(baseUrl + fileId, {
      	params: {
      		fields: 'thumbnailLink',
      		key: APIKey
      	}
      });
    };

    return driveFactory;

  }]);
