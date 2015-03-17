(function(){
  'use strict';

  describe('PeopleCtrl', function(){
    var scope;


    // mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('mobileUserGroups'));


    // // mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){


      // TODO remove once dummy data is removed. Need timers scope for list.
      var parentScope = $rootScope.$new();
      // $controller('TimersCtrl', {$scope: parentScope});
      //
      //
      // //create an empty scope
      // scope = $rootScope.$new();
      // //declare the controller and inject our empty scope
      // $controller('TimerCtrl', {$scope: scope, $stateParams: {timerId: 1}});
    }));


    // TimerCtrl TESTS
    xit('should load first timer with title "Boiled Eggs"', function(){
      expect(scope.timer.title).toBe('Boiled Eggs');
    });


    xit('should START the count down', function(){
      expect(true).toBe('test');
    });


    xit('should STOP the count down', function(){
      expect(true).toBe(false);
    });


    xit('should RESET the count down', function(){
      expect(true).toBe(false);
    });


  });
}());
