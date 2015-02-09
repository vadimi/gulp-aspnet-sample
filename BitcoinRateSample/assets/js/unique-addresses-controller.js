angular.module('bitcoinRatesApp').controller('UniqueAddressesController', ['$scope', 'BitcoinDataService',
  function ($scope, bitcoinDataService) {
      bitcoinDataService.getAllUniqueAddresses().success(function (data) {
          $scope.rates = data;
      });
  }
]);