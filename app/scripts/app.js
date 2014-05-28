'use strict';

angular.module('epluganalyticsApp', ['ui.bootstrap', 'ngRoute']);

angular.module('epluganalyticsApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',{templateUrl: '/views/main.html', controller: 'MainCtrl'}).
        otherwise({redirectTo:'/'});
  }]);