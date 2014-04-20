var lfnwAppControllers = angular.module('lfnwAppControllers', []);

// see app.js
// This controller displays a list of sessions
lfnwAppControllers.controller('SessionsListCtrl', function($scope, $http) {
	$scope.state = 'pre get';
 	$http.get('http://www.linuxfestnorthwest.org/mobile/sessions.json').success(function(data) {
	    $scope.sessions = data;
	   	$scope.state = 'return json';
	});

	$scope.sessions = 'NOT SET';
	$scope.state = 'post get';
});

// see app.js
// This controller shows details about a specific session
lfnwAppControllers.controller('SessionListCtrl', function($scope, $routeParams, $http) {
});

// see app.js
// This controller allows for defined locations to load in an embedded window
lfnwAppControllers.controller('WebViewContentCtrl', function($scope, $routeParams, $sce) {
	$scope.webViews = [
		{ 'name':'sessions', 'url':'http://linuxfestnorthwest.org/2014/sessions'},
		{ 'name':'venue',    'url':'http://linuxfestnorthwest.org/information/venue'},
		{ 'name':'sponsors', 'url':'http://linuxfestnorthwest.org/2014/sponsors'},
		{ 'name':'register', 'url':'http://linuxfestnorthwest.org/2014'}
	];

	for (var index=0; index < $scope.webViews.length; index++) {
		var item = $scope.webViews[index];
		if (item.name == $routeParams.name) {
			$scope.currentNavDrawerItemUrl = $sce.trustAsResourceUrl(item.url);
			break;
		}
	}

	// // todo: use the $routeParam.name to determine which webview content to load
	// $scope.currentNavDrawerItemUrl = $sce.trustAsResourceUrl($scope.webViews[1].url);
});
