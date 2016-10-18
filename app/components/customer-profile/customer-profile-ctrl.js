;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CustomerProfileCtrl', CustomerProfileCtrl);

    CustomerProfileCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger','$uibModalStack','$stateParams','$filter'];

    function CustomerProfileCtrl($scope, $state, ModalService, QueryService,logger, $uibModalStack, $stateParams,$filter) {

        
        var vm = this;
        
        vm.titleHeader = 'My Customer';
       
        vm.sort = sort;
        vm.getFullName = getFullName;
        
        vm.customerAndTreatmentModal = customerAndTreatmentModal;
        vm.removeCustomerModal = removeCustomerModal;
        vm.getTreatmentName = getTreatmentName;

        vm.data = {};
        vm.data_final = {};
        vm.consultationtreatment_data = {};
         vm.consultationtreatment_data_final = [];
        vm.treatment_data = {};
        vm.treatment_data_filter = {};


         vm.pager = {};
      
        function initController() {
              
        }


       

        function sort(keyname){
            vm.sortKey = keyname;   //set the sortKey to the param passed
            vm.reverse = !vm.reverse; //if true make it false and vice versa
        }
        
        function getFullName(person) {
           return person.fullName = person.firstname + ' ' + person.lastname;
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

        function getTreatmentName(objects) {
             
            vm.treatment_data_filter = $filter('filter')(vm.treatment_data, {'id':objects.treatment_id},true);  //filter
            return objects.treatment_name=  vm.treatment_data_filter[0].name;
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

        /*********************************** Consulatation ********************************/
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
                 
                  var id = parseInt($stateParams.id);
                  vm.data = $filter('filter')(vm.data, {'id':id},true);  //filter

                  vm.data_final =vm.data; //reassign data because it is empty
           })
        })();


        


          /*********************************** Treatments ********************************/
         (function getPost () {
            var params = {}
            var route = {
                treatments : ""
            }
           /* https://jsonplaceholder.typicode.com/users*/
           QueryService.query('GET', false, false, false, false, route)
           .then(function (response) {
                vm.treatment_data = response.data;
                
                // logger.success('',response, MESSAGE.success);
           }, function (err) {
                logger.error(MESSAGE.error, err, '');
           })
           .then(function(response) {
                 //var id = parseInt($stateParams.id);
                 
           })
        })();



        /*********************************** Consulatation X Treatments ********************************/
         (function getPost () {
            var params = {}
            var route = {
                consultationsxtreatments : ""
            }
           /* https://jsonplaceholder.typicode.com/users*/
           QueryService.query('GET', false, false, false, false, route)
           .then(function (response) {
                vm.consultationtreatment_data = response.data;
                
                // logger.success('',response, MESSAGE.success);
           }, function (err) {
                logger.error(MESSAGE.error, err, '');
           })
           .then(function(response) {
                 var id = parseInt($stateParams.id);
                 vm.consultationtreatment_data = $filter('filter')(vm.consultationtreatment_data, {'consultation_id':id},true);  //filter
                 vm.consultationtreatment_data_final = vm.consultationtreatment_data;

                 
           })
        })();

        
    }
})();