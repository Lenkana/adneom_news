'use strict';

var app = angular
  .module('adeneomNews', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/news/:idNews', {
        templateUrl: 'views/show-news.html',
        controller: 'showNewsCtrl',
        controllerAs: 'showNews'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
