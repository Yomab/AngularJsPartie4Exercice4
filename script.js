var app = angular.module('myApp', []);
app.controller('voitureCtrl', function($scope, $http) {
  $http.get("voiture.json").then(function (response) {
      $scope.myData = response.data;
  });
});
