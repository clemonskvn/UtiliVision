app.factory('outageSummary', ['$http', function ($http) {
    'use strict';
    console.log("entered outageSummary service(factory)");
    return $http.get('resources/outageSummary.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);