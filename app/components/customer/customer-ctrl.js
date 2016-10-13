;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CustomerCtrl', CustomerCtrl);

    CustomerCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger'];

    function CustomerCtrl($scope, $state, ModalService, QueryService,logger) {
        var vm = this;
        
        vm.titleHeader = 'My Customer';
        vm.message_modal = message_modal;
        vm.data = {};


         vm.pager = {};
      
         function initController() {
              vm.data_final = {};
              vm.data_final =vm.data; //reassign data because it is empty
        }

        $scope.sort = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
        
        $scope.getFullName = function(person) {
           return person.fullName = person.firstname + ' ' + person.lastname;
        }

        function message_modal () {
            var content =  {
                header:'Message',
                message:'Hello World!'
            }
            ModalService.confirm_modal(content);
        }

        (function getPost () {
            var params = {}
            var route = {
                customers : ""
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