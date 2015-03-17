(function(){
  'use strict';

  describe('PeopleCtrl', function(){
    // mock Application to allow us to inject our own dependencies
    beforeEach(module('mobileUserGroupsApp.controllers'));

    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));


    describe('$scope.people', function(){
      var $scope, controller;

      beforeEach(function(){
        $scope = {};
        controller = $controller('PeopleCtrl', { $scope: $scope });
      });

      // PeopleCtrl TESTS
      it('should contain people', function(){
        expect($scope.people).toBeDefined();
      });

    });

  });


}());
