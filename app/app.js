'use strict';

var app = angular.module("BookApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '../partials/guideList.html',
        controller: 'bookCtrl'
    })
    .otherwise('/');
});



