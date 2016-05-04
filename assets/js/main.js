(function () {
	var app = angular.module('mainApp', []);

	app.controller('NewsListCtrl',['$scope', '$http', function ($scope, $http) {
	  $http.get('data.json').success(function(data) {
	    $scope.news_list = data;
	  });

	  $scope.orderProp = 'rank';

	  $scope.$on('tab-changed', function(event, tabObj) {

	  	$scope.loading = true;
	    $http.get('data2.json').success(function(data) {
		    
		    $scope.news_list = data;
		    $scope.loading = false;
		    
		  });

			$scope.orderProp = 'rank';
	  });
	}]);

	app.controller('TabController', ['$rootScope', function ($rootScope) {
	  this.tab = 1;

	  this.setTab = function (tabId) {
			this.tab = tabId;

			$rootScope.$broadcast('tab-changed', {
		  	tabId: this.tab
		  });
	  };

	  this.isSet = function (tabId) {
	  	return this.tab === tabId;
	  };
	}]);
})();