;(function (){
    'use strict';

    angular
        .module('app')
        .controller('CommentCtrl', CommentCtrl);

    CommentCtrl.$inject = ['$scope', '$state','ModalService', 'QueryService','PagerService','logger'];

    function CommentCtrl($scope, $state, ModalService, QueryService,PagerService,logger) {
        var vm = this;
        
        vm.titleHeader = 'Comment';
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

        $scope.orderProperty = "+f";
        $scope.sortProperty = function(column) {
            var currentColumn = $scope.orderProperty.slice(1);
            var currentDirection = $scope.orderProperty.slice(0, 1);
            var dir = '+';
 
            if (column === currentColumn) {
                dir = currentDirection === '+' ? '-' : '+';
            }

            $scope.orderProperty = dir + column;

            if (dir == '-') {
                vm.pager = PagerService.GetPager(vm.data.length, vm.pager.totalPages);
                vm.items = vm.data.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
            } else {
                vm.pager = PagerService.GetPager(vm.data.length, 1);        
                vm.items = vm.data.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
            }
            
        };
        
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