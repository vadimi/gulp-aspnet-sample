angular.module('bitcoinRatesApp').factory('BitcoinDataService', ['$http', function ($http) {
    var service = {};

    service.getAllBitcoinRates = function () {
        return $http.get('/assets/js/bitcoin-usd.json');
    };

    service.getAllBitcoinTransactions = function () {
        return $http.get('/assets/js/bitcoin-transactions.json');
    };

    service.getAllUniqueAddresses = function () {
        return $http.get('/assets/js/bitcoin-unique-addresses.json');
    };

    return service;
}]);