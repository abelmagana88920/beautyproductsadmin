;(function (){
    'use strict'

    angular
        .module('app')
        .controller('RemoveCustomerModalCtrl', RemoveCustomerModalCtrl);

    RemoveCustomerModalCtrl.$inject = ['$scope', '$cookies', '$uibModalInstance',
                                     '$timeout', 'message', 'QueryService'];
    

    function RemoveCustomerModalCtrl($scope, $cookies, $uibModalInstance, 
                                    $timeout, message, QueryService) {
        var vm     = this,
            ids    = message.keys;
        vm.content = message; 
        vm.data    = message.data;

        vm.approve = approve;
        vm.cancel  = cancel;

        function approve () {

        }

        function cancel () {
            $uibModalInstance.close();
        }

    }


})();