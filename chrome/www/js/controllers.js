var lfnwApp = angular.module('lfnwApp', []);

lfnwApp.controller('NavDrawerListCtrl', function ($scope, $sce) {
  $scope.navDrawerItems = [
		{ 'name':'Sessions', 'url':'http://linuxfestnorthwest.org/2014/sessions'},
		{ 'name':'Venue',    'url':'http://linuxfestnorthwest.org/information/venue'},
		{ 'name':'Sponsors', 'url':'http://linuxfestnorthwest.org/2014/sponsors'},
		{ 'name':'Register', 'url':'http://linuxfestnorthwest.org/2014'},
		{ 'name':'About', 'url':''}
	];

	$scope.setNavTarget = function (navItem) {
		$scope.currentNavDrawerItem = navItem;
		$scope.currentNavDrawerItemUrl = $sce.trustAsResourceUrl($scope.currentNavDrawerItem.url);
	}

	$scope.setNavTarget($scope.navDrawerItems[0]);

	$scope.styleForNavTarget = function (navItem, selected, unselected) {
		return navItem === $scope.currentNavDrawerItem ? selected : unselected;
	}
});
