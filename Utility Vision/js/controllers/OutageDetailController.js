app.controller('OutageDetailController', ['$scope', '$routeParams', 'outageCases', function ($scope, $routeParams, outageCases) {
    'use strict';
    
    console.log("entered OutageDetailController");
    
    console.log("$routeParams.caseNum" + $routeParams.caseNum);
    $scope.caseNum = $routeParams.caseNum;
    
    outageCases.success(function (data) {
        $scope.cases = data;
    });
}])
    .filter('filterOnCaseNumber', function () {
        'use strict';
        return function (input) {

            var out = [];

            angular.forEach(input, function (data) {
                if (data.caseNumber === input) {
                    out.push(data);
                }
            });

            return out;
        };
    })
    .filter('decodeLevel', function () {
        'use strict';
        return function (data) {
            var testMap = {"L": "Local", "T": "Transformer", "F": "Fuse", "C": "Circuit"};
            angular.forEach(testMap, function (value, key) {
                if (key === data) {
                    data = value;
                }
            });
            return data;
        };
    });