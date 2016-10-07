;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CommentCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger'];

    function DashboardCtrl ($scope, $state, ModalService, QueryService,logger) {
        var vm = this;
        
        vm.titleHeader = 'Comment';
        vm.message_modal = message_modal;
        vm.data = {};

        
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
        })()
    }
})();