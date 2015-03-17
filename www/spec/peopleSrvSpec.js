(function(){
  'use strict';

  describe('PeopleSrv', function(){
    var PeopleSrv;

    beforeEach(module('mobileUserGroupsApp.services'));

    beforeEach(function(){

      inject(function($injector) {
        PeopleSrv = $injector.get('PeopleSrv');
      });

    });


    it('should load people from REST API', function(){
      expect(true).toBe(false);
    });

  });


}());
