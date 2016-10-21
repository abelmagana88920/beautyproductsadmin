;(function (){
    'use strict';

    angular
        .module('app')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger','$uibModalStack','$location'];

    function UserCtrl($scope, $state, ModalService, QueryService,logger, $uibModalStack,$location) {
        var vm = this;
        
        vm.titleHeader = 'Beautician Users';
       
        vm.sort = sort;
        
        
        vm.customerAndTreatmentModal = customerAndTreatmentModal;
       
        vm.getObjects = getObjects;
        vm.newUserProfileModal = newUserProfileModal;
        vm.updateUserProfileModal =updateUserProfileModal;
        vm.removeUserProfileModal =removeUserProfileModal;
        vm.activateBlock = activateBlock;

        vm.data = {};
        vm.data_filter = [];

        vm.isActiveItem = [];


        vm.pager = {};


      
        function initController() {
              
        }


        function sort(keyname){
            vm.sortKey = keyname;   //set the sortKey to the param passed
            vm.reverse = !vm.reverse; //if true make it false and vice versa
        }
        
        function activateBlock($index, is_active) {
             var active_block = '';
            
             vm.isActiveItem[$index] = !vm.isActiveItem[$index];
             if (vm.isActiveItem[$index]) active_block='1';
             else active_block='0';

             vm.data_final[$index].is_active=active_block;
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

        function newUserProfileModal() {
            var content =  {
                header:'Add Beautician User',
                action:'add',
                message:''
            }
            ModalService.user_profile_modal(content);
        }

        function updateUserProfileModal(id) {
            var content =  {
                header:'Update Beautician User',
                action:'update',
                id: id,
                message:''
            }
            ModalService.user_profile_modal(content);
        }

         

        function message_modal () {
            var content =  {
                header:'Message',
                message:'Hello World!'
            }
            ModalService.confirm_modal(content);
        }

        function removeUserProfileModal() {
            var content =  {
                header:'Remove User',
                message:'Are you sure you want to remove this user?'
            }
            ModalService.confirm_modal(content);
        }

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
                vm.data_final = {};
                vm.data_final =vm.data; //reassign data because it is empty
           })
        })();


        function getObjects(objects,index) {
            objects.activate_text = [];

            objects.fullname=  objects.firstname + ' ' + objects.lastname;
            if (objects.is_active == "1") objects.activate_text[index]= "Actived";
            else if (objects.is_active == "0") objects.activate_text[index] = "Blocked";
            return objects = 1;
        } 
    }
})();