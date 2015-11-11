app.factory('systemStatus', ['$http', function ($http) {
    'use strict';
    console.log("entered systemStatus service(factory)");
    return $http.get('resources/systemStatus.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);