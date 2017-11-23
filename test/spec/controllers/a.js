'use strict';

describe('Controller: ACtrl', function () {

  // load the controller's module
  beforeEach(module('mundialClienteApp'));

  var ACtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ACtrl = $controller('ACtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ACtrl.awesomeThings.length).toBe(3);
  });
});
