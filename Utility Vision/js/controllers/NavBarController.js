app.controller('NavBarController', ['$scope', 'outageSummary', function ($scope, outageSummary) {
    'use strict';
    console.log("entered MainController");
    
    outageSummary.success(function (data) {
        $scope.metrics = data;
    });
}]);