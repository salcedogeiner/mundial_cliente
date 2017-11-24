'use strict';

describe('Directive: selectCiudades', function () {

  // load the directive's module
  beforeEach(module('mundialClienteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<select-ciudades></select-ciudades>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the selectCiudades directive');
  }));
});
