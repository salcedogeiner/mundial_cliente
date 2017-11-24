'use strict';

describe('Directive: selectConfederaciones', function () {

  // load the directive's module
  beforeEach(module('mundialClienteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<select-confederaciones></select-confederaciones>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the selectConfederaciones directive');
  }));
});
