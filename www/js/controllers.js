angular.module('mobileUserGroupsApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PeopleCtrl', function($scope) {

  // load people from server
  $scope.people = [
    { firstName: 'Reggae', id: 1 },
    { firstName: 'Chill', id: 2 },
    { firstName: 'Dubstep', id: 3 },
    { firstName: 'Indie', id: 4 },
    { firstName: 'Rap', id: 5 },
    { firstName: 'Cowbell', id: 6 }
  ];

})

.controller('PersonCtrl', function($scope, $stateParams) {
});
