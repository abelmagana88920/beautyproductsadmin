;(function (){
    'use strict';

    angular
        .module('app')
        .controller('NewDiagnosisCtrl', NewDiagnosisCtrl);

    NewDiagnosisCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger','$uibModalStack','$location','$filter','$stateParams'];

    function NewDiagnosisCtrl($scope, $state, ModalService, QueryService,logger, $uibModalStack,$location,$filter, $stateParams) {
        var vm = this;

        
        vm.titleHeader = 'Diagnosis';
        vm.sort = sort;
         
        vm.customerAndTreatmentModal = customerAndTreatmentModal;
        vm.removeCustomerModal = removeCustomerModal;

        vm.getConsultationTreatmentObject = getConsultationTreatmentObject;
        vm.consultationTreatmentDetailsModal = consultationTreatmentDetailsModal;
        vm.addTreatmentModal = addTreatmentModal;
        

        vm.treatment_data = [];
        vm.treatment_data_final = [];
        vm.consultationtreatment_data = [];
        vm.consultationtreatment_data_final = [];
        vm.consultationtreatment_data_filter = [];


         vm.pager = {};
      
        function initController() {
              
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

         function consultationTreatmentDetailsModal (datas) {
             
             var content =  {
                    header: datas.name,
             }
             ModalService.consultation_treatment_details_modal(content);  
        }

        function addTreatmentModal () {
            console.log('sds');
             var content =  {
                    header: 'Add New Treatment'
             }
             ModalService.add_treatment_modal(content);  
        }

        function getConsultationTreatmentObject(objects) {

             var initial_value = [{
                  how_many_times: '',
                  how_often: '',
                  notes: ''
             }];

            var selected=false;
          
            var treatment_id = parseInt(objects.id);
            var consultation_id = parseInt($stateParams.id);

            vm.consultationtreatment_data_filter = $filter('filter')(vm.consultationtreatment_data, {'consultation_id':consultation_id,'treatment_id':treatment_id }, true);  //filter
            if ( vm.consultationtreatment_data_filter.length == 0 ) {
                    vm.consultationtreatment_data_filter = initial_value; 
                    selected = false;
                    
            }  else 
                 selected = true;
  
            objects.how_many_times = vm.consultationtreatment_data_filter[0].how_many_times;
            objects.how_often=  vm.consultationtreatment_data_filter[0].how_often;
            objects.notes=  vm.consultationtreatment_data_filter[0].notes;
            objects.selected=  selected;


            return objects = 1;  // having data needed
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


      

        /*********************Get All treatments******************************/
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
                vm.treatment_data_final =vm.treatment_data; //reassign data because it is empty
           })
        })();


        /*********************Get All Consultaion Treatment******************************/
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
                vm.consultationtreatment_data_final =vm.consultationtreatment_data; //reassign data because it is empty
           })
        })();


       

    }
})();