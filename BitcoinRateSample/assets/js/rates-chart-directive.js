(function (MG) {
    angular.module('bitcoinRatesApp').directive('ratesChart', function () {
        return {
            restrict: 'E',
            scope: {
                rates: '=',
                title: '@'
            },
            link: function (scope, element, attrs) {
                scope.$watch('rates', function () {
                    if (scope.rates) {
                        var data = MG.convert.date(scope.rates.data, 'date', '%Y-%m-%d');

                        MG.data_graphic({
                            title: scope.title,
                            description: '',
                            data: data,
                            show_years: true,
                            xax_count: 5,
                            interpolate: 'monotone',
                            width: 700,
                            height: 300,
                            target: element[0],
                            x_accessor: 'date',
                            y_accessor: 'rate'
                        });
                    }
                });
            },
            replace: true,
            template: '<div></div>'
        };
    });
})(MG);