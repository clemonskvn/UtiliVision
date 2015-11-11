app.controller('FooterController', ['$scope', 'systemStatus', function ($scope, systemStatus) {
    'use strict';
    console.log("entered MainController");
    
    systemStatus.success(function (data) {
        $scope.status = data;
    });
}]);