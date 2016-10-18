;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CustomerCtrl', CustomerCtrl);

    CustomerCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger','$uibModalStack','$location'];

    function CustomerCtrl($scope, $state, ModalService, QueryService,logger, $uibModalStack,$location) {
        var vm = this;
        
        vm.titleHeader = 'My Customer';
       
        vm.sort = sort;
         
        
        vm.customerAndTreatmentModal = customerAndTreatmentModal;
        vm.removeCustomerModal = removeCustomerModal;
        

        vm.data = {};


         vm.pager = {};
      
        function initController() {
              vm.data_final = {};
              vm.data_final =vm.data; //reassign data because it is empty
        }


       

        function sort(keyname){
            vm.sortKey = keyname;   //set the sortKey to the param passed
            vm.reverse = !vm.reverse; //if true make it false and vice versa
        }
        
        

       

        function customerAndTreatmentModal () {
            vm.addCTOptionFReverse = !vm.addCTOptionFReverse; //if true make it false and vice versa
            /*if (vm.addCTOptionFReverse) {
                var content =  {
                    message:'Hello World!'
                }
                ModalService.customer_and_treatment_modal(content);
            } else {
                $uibModalStack.dismissAll();
            } */
        }

         

        function message_modal () {
            var content =  {
                header:'Message',
                message:'Hello World!'
            }
            ModalService.confirm_modal(content);
        }

        function removeCustomerModal() {
            var content =  {
                header:'Remove Customer',
                message:'Are you sure you want to remove this customer?'
            }
            ModalService.remove_customer_modal(content);
        }

        (function getPost () {
            var params = {}
            var route = {
                consultation : ""
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
                initController();
           })
        })()
    }
})();