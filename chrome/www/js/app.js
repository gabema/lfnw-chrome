var lfnwApp = angular.module('lfnwApp', [
  'ngRoute',
  'lfnwAppControllers'
]);

lfnwApp.config(['$routeProvider', '$compileProvider', '$locationProvider',
  function($routeProvider, $compileProvider, $locationProvider) {

    // http://stackoverflow.com/questions/13832529/how-to-config-routeprovider-and-locationprovider-in-angularjs
    // Needed to use angular routing in a supportable way in chrome apps (work aournd csp restrictions)
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

    // Allow chrome packaged app urls for Angular routing in chrome packaged apps
    // http://stackoverflow.com/questions/15606751/angular-changes-urls-to-unsafe-in-extension-page
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file):|data:image\/|filesystem:chrome-extension:/);

    $routeProvider.
      when('/webview/:name', {
        templateUrl: 'partials/webview.html',
        controller: 'WebViewContentCtrl'
      }).
      when('/sessions', {
        templateUrl: 'partials/sessions.html',
        controller: 'SessionsListCtrl'
      }).
      when('/session/:sessionId', {
        templateUrl: 'partials/session.html',
        controller: 'SessionDetailCtrl'
      }).
      otherwise({
        redirectTo: '/sessions'
      });
  }]);

lfnwApp.controller('NavDrawerListCtrl', function ($scope, $sce, $http, $location) {
  $scope.navDrawerItems = [
      { 'name':'SessionsView', 'view':'sessions'},
    { 'name':'Sessions', 'view':'webview/sessions'},
    { 'name':'Venue',    'view':'webview/venue'},
    { 'name':'Sponsors', 'view':'webview/sponsors'},
    { 'name':'Register', 'view':'webview/register'},
    { 'name':'About', 'view':''}
  ];

  $scope.setNavTarget = function (navItem) {
    $scope.currentNavDrawerItem = navItem;
  }

  $scope.styleForNavTarget = function (navItem, selected, unselected) {
    return navItem === $scope.currentNavDrawerItem ? selected : unselected;
  }

  // http://stackoverflow.com/questions/15392500/angular-routing-without-changing-location
  // $scope.navigateTo = function(location) {
  //   $location.path(location);
  // }

  $scope.setNavTarget($scope.navDrawerItems[0]);
});
