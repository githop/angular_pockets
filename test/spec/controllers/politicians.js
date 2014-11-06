'use strict';

describe('Controller: PoliticiansCtrl', function () {

  // load the controller's module
  beforeEach(module('ngFdnApp'));

  var PoliticiansCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoliticiansCtrl = $controller('PoliticiansCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
