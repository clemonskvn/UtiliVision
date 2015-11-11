app.factory('outageCases', ['$http', function ($http) {
    'use strict';
    console.log("entered outageCases service(factory)");
    return $http.get('resources/outageCases.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);