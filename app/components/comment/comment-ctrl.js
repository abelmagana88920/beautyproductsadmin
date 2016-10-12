;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CommentCtrl', CommentCtrl);

    CommentCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger'];

    function CommentCtrl($scope, $state, ModalService, QueryService,logger) {
        var vm = this;
        
        vm.titleHeader = 'Comment';
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
                comments : ""
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