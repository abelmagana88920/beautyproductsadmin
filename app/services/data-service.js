;(function (){
    'use strict';

     angular
       .module('app')
       .factory('DataService', DataService);

        DataService.$inject = ['$http', '$location'];

        function DataService ($http, $location) {

                var serviceBase = 'api/';

                var obj = {};

                obj.get = function (q) { 
                    return $http.get(serviceBase + q).then(function (results) {
                        return results.data;
                    });
                };
                obj.post = function (q, object) {
                    return $http.post(serviceBase + q, object).then(function (results) {
                        return results.data;
                    });
                };
                obj.put = function (q, object) {
                    return $http.put(serviceBase + q, object).then(function (results) {
                        return results.data;
                    });
                };
                obj.delete = function (q) {
                    return $http.delete(serviceBase + q).then(function (results) {
                        return results.data;
                    });
                };
                return obj;

        }
    
})();
