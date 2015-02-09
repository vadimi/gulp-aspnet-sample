angular.module('bitcoinRatesApp').controller('HomeController', ['$scope', 'BitcoinDataService',
  function ($scope, bitcoinDataService) {
      bitcoinDataService.getAllBitcoinRates().success(function (data) {
          $scope.rates = data;
      });
  }
]);