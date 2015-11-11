var app = angular.module('utilityVisionApp', ['ngRoute']);

app.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/home.html'
        })
        .when('/map', {
            controller: 'MapController',
            templateUrl: 'views/map.html'
        })
        .when('/outagedetail/:caseNum', {
            controller: 'OutageDetailController',
            templateUrl: 'views/Outagedetail.html'
        })
        .when('/settings', {
            controller: 'SettingsController',
            templateUrl: 'views/settings.html'
        })
        .when('/profile', {
            controller: 'ProfileController',
            templateUrl: 'views/profile.html'
        })
        .when('/help', {
            controller: 'HelpController',
            templateUrl: 'views/help.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
