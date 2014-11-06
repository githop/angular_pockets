'use strict';

describe('Service: openSecretsAPI', function () {

  // load the service's module
  beforeEach(module('ngFdnApp'));

  // instantiate service
  var openSecretsAPI;
  beforeEach(inject(function (_openSecretsAPI_) {
    openSecretsAPI = _openSecretsAPI_;
  }));

  it('should do something', function () {
    expect(!!openSecretsAPI).toBe(true);
  });

});
