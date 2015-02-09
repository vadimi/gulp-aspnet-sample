angular.module('bitcoinRatesApp').controller('TransactionsController', ['$scope', 'BitcoinDataService',
  function ($scope, bitcoinDataService) {
      bitcoinDataService.getAllBitcoinTransactions().success(function (data) {
          $scope.rates = data;
      });
  }
]);