(function (angular) {

    var bitcoinRatesApp = angular.module('bitcoinRatesApp', ['ngRoute']);

    bitcoinRatesApp.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider
            .when('/', {
                templateUrl: '/assets/templates/home.html',
                controller: 'HomeController'
            })
            .when('/transactions', {
                templateUrl: '/assets/templates/transactions.html',
                controller: 'TransactionsController'
            })
            .when('/unique-addresses', {
                templateUrl: '/assets/templates/unique-addresses.html',
                controller: 'UniqueAddressesController'
            })
            .otherwise({
                redirectTo: '/'
            });
      }
    ]);

})(angular);