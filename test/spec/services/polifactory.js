'use strict';

describe('Service: poliFactory', function () {

  // load the service's module
  beforeEach(module('ngFdnApp'));

  // instantiate service
  var poliFactory;
  beforeEach(inject(function (_poliFactory_) {
    poliFactory = _poliFactory_;
  }));

  it('should do something', function () {
    expect(!!poliFactory).toBe(true);
  });

});
