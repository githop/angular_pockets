'use strict';

/**
 * @ngdoc overview
 * @name ngFdnApp
 * @description
 * # ngFdnApp
 *
 * Main module of the application.
 */
 angular
 .module('ngFdnApp', [
  'mm.foundation',
  'highcharts-ng', 
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/politicians.html',
    controller: 'PoliticiansCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/politicians', {
    templateUrl: 'views/politicians.html',
    controller: 'PoliticiansCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  String.prototype.titleize = function() {
    var words = this.split(' ');
    var array = [];
    for (var i=0; i<words.length; ++i) {
      array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1));
    }
    return array.join(' ');
  };

});
