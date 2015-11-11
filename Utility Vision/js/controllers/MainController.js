app.controller('MainController', ['$scope', 'outageSummary', 'outageCases', 'systemStatus', function ($scope, outageSummary, outageCases, systemStatus) {
    'use strict';
    console.log("entered MainController");
    
    outageCases.success(function (data) {
        $scope.cases = data;
    });
    outageSummary.success(function (data) {
        $scope.metrics = data;
    });
}]);