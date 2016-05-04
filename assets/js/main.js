var app = angular.module('mainApp', []);

app.controller('NewsListCtrl', function ($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.news_list = data;
  });

  $scope.orderProp = 'rank';
});
