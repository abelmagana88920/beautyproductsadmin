;(function (){
    'use strict'

    angular
        .module('app')
        .controller('ConsultationTreatmentDetailsModalCtrl', ConsultationTreatmentDetailsModalCtrl);

    ConsultationTreatmentDetailsModalCtrl.$inject = ['$scope', '$cookies', '$uibModalInstance',
                                     '$timeout', 'message', 'QueryService'];
    function ConsultationTreatmentDetailsModalCtrl ($scope, $cookies, $uibModalInstance, 
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