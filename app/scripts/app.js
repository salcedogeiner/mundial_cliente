'use strict';

/**
 * @ngdoc overview
 * @name mundialClienteApp
 * @description
 * # mundialClienteApp
 *
 * Main module of the application.
 */
angular
  .module('mundialClienteApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/a', {
        templateUrl: 'views/a.html',
        controller: 'ACtrl',
        controllerAs: 'a'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('apiRequest', function ($http) {
    var path = "http://localhost:8080/mundial_api/webresources/models.";
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla.toLowerCase()+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla.toLowerCase(),elemento);
      },
      put: function (tabla,id,elemento) {
        return $http.put(path+tabla.toLowerCase()+"/"+id,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla.toLowerCase()+"/"+id);
      }
    };
  })
  .factory('httpRequestInterceptor', function () {
    return {
      request: function (config) {
        config.headers['Accept'] = 'application/json';
        return config;
      }
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });
