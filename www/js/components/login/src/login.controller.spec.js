'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('electora'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
