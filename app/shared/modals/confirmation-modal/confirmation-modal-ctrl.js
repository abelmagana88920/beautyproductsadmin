;(function (){
    'use strict'

    angular
        .module('app')
        .controller('ConfirmationModalCtrl', ConfirmationModalCtrl);

    ConfirmationModalCtrl.$inject = ['$scope', '$cookies', '$uibModalInstance',
                                     '$timeout', 'message', 'QueryService','DataService'];
    function ConfirmationModalCtrl ($scope, $cookies, $uibModalInstance, 
                                    $timeout, message, QueryService,DataService) {
        var vm     = this,
            ids    = message.keys;
        vm.content = message; 
        vm.data    = message.data;

        vm.approve = approve;
        vm.cancel  = cancel;

        function approve () {
                if (vm.content.action == 'delete') DataService.delete('1');
        }

        function cancel () {
            $uibModalInstance.close();
        }

    }


})();