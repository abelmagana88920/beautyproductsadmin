;(function (){
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state'];

    function LoginCtrl ($scope, $state) {
        var vm         = this;
        vm.hello       = 'hellos';
        vm.admin       = true; 
        vm.showNavItem = true;
        vm.disable     = false;
        vm.isPassword  = false;
        vm.header      = 'Login';
        vm.loading     = 'Logging in...';
        vm.log         = 'Login';

        vm.login  = login;
        vm.forgot = forgot;

        function login (user) {
            $state.go('app.customer');
        }

        function forgot () {

        }
    }

})();