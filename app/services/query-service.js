;(function () {
    'use strict';

   angular
       .module('app')
       .factory('QueryService', QueryService);

    QueryService.$inject = ['$http', '$q'];
    function QueryService ($http, $q) {

        var service = {
            query: query
        };

        return service;

        function query(method, data, token, params, hasFile, ids, nameSpace) {
            var request = { 
                method  : method,
                data    : GLOBAL.clean_data(data),
                url     : GLOBAL.url(ids),
                headers : GLOBAL.header(token),
                params  : GLOBAL.query(params),
                transformRequest : GLOBAL.transform(hasFile)
            };
            if (hasFile) {
                request.headers['Content-Type'] = undefined;
            }
            if (nameSpace) {
                request.headers['Client-Application'] = nameSpace;
            }
            var new_req = GLOBAL.clean_object(request); 
            
            return $http(new_req);
        }
    }


})();