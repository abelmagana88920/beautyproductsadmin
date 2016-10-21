;(function (){
    'use strict'

    angular
        .module('app')
        .controller('UserProfileModalCtrl', UserProfileModalCtrl);

    UserProfileModalCtrl.$inject = ['$scope', '$cookies', '$uibModalInstance',
                                     '$timeout', 'message', 'QueryService', '$filter','DataService'];
    function UserProfileModalCtrl ($scope, $cookies, $uibModalInstance, 
                                    $timeout, message, QueryService,$filter,DataService) {
        var vm     = this,
            ids    = message.keys;
        vm.content = message; 
        vm.data    = message.data;

        vm.approve = approve;
        vm.cancel  = cancel;

        vm.data_filter = [];


        function approve () {
            console.log($scope.formUserProfile.$valid);
            if ($scope.formUserProfile.$valid) {
                if (vm.content.action == 'add')
                    DataService.post('1');
                else if (vm.content.action == 'update')
                    DataService.put('1');
            } 
        }

        function cancel () {
            $uibModalInstance.close();
        }


        /*******************Fetch User Profile filter by id****************/
        (function getPost () {
            var params = {}
            var route = {
                users : ""
            }
           /* https://jsonplaceholder.typicode.com/users*/
           QueryService.query('GET', false, false, false, false, route)
           .then(function (response) {
                vm.data = response.data;
                
                // logger.success('',response, MESSAGE.success);
           }, function (err) {
                logger.error(MESSAGE.error, err, '');
           })
           .then(function(response) { 
                  var id = parseInt(vm.content.id);
                  vm.data_filter = $filter('filter')(vm.data, {'id':id},true);  //filter
                 
           })
        })();

    }


})();