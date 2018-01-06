'use strict';
var App = angular.module('app', [ 'ui.router', 'LocalStorageModule' ]);
App.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

localStorageServiceProvider.setPrefix('myAppName').setStorageType('sessionStorage')


	$urlRouterProvider.otherwise('/');
	$stateProvider.state('/', {
		url : '/',
		templateUrl : '/templates/basicinfo.html',
		controller : 'basicinfo'
	}).state('athletsdetails', {
       		url : '/athlets',
       		templateUrl : '/templates/about.html',
            controller : 'about'
       	}).state('summary', {
           		url : '/login',
           		templateUrl : '/templates/summary.html',
           		controller : 'homepage2'
           	});
});