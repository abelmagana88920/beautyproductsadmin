;(function (){
    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$cookies',
                       'QueryService'];

    function NavCtrl ($rootScope, $scope, $state, $stateParams, $timeout, $cookies, 
                      QueryService) {
        var vm             = this;

        vm.logout          = logout;
        vm.update_password = update_password;

        init();

        function init () {

        } 

        function logout () {
            $state.go('login');
        }

        function update_password () {

        }


    }
})();