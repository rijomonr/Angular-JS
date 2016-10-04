var app = angular.module("myApp", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/home', { templateUrl : 'pages/home.html', controller : 'HomeController', activetab : 'home'}).
		when('/about', {templateUrl : 'pages/about.html', controller : 'AboutController', activetab : 'about'}).
		when('/about/:linkId', {templateUrl : function(params) { return 'about/'+params.linkId+'.html'; }, controller : 'AboutController', activetab : 'about'}).
		when('/:linkId', {templateUrl : function(params) { return 'pages/'+params.linkId+'.html'; }, controller : 'AboutController', activetab : 'contact'}).
		when('/contact', {templateUrl : 'pages/contact.html',controller:'ContactController',activetab : 'contact'}).
		otherwise({redirectTo : '/home'});
}]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
	
}]);