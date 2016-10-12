;(function (){
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','logger'];

    function DashboardCtrl ($scope, $state, ModalService, QueryService,logger) {
        var vm = this;
        
        vm.titleHeader = 'Dashboard';
        vm.message_modal = message_modal;
        vm.data = {};

        vm.pager = {};
        vm.setPage = setPage;

        
        function initController() {
            // initialize to page 1
            vm.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }
            // get pager object from service
            vm.pager = PagerService.GetPager(vm.data.length, page);
            // get current page of items
            vm.items = vm.data.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
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
                users : ""
            }
           /* https://jsonplaceholder.typicode.com/users*/
           QueryService.query('GET', false, false, false, false, route)
           .then(function (response) {
                vm.data = response.data;
                initController();
                // logger.success('',response, MESSAGE.success);
           }, function (err) {
                logger.error(MESSAGE.error, err, '');
           })
        })()


    }

  
})();