;(function (){
    'use strict';

    angular
        .module('app')
        .controller('ContentCtrl', ContentCtrl);

    ContentCtrl.$inject = ['$rootScope', '$state', '$cookies', '$scope', '$stateParams'];

    function ContentCtrl ($rootScope, $state, $cookies, $scope, $stateParams) {
        var vm                = this;

        $rootScope.back       = back;
        $rootScope.init       = rootInit;
        $rootScope.active_tab = active_tab;
        $rootScope.next       = next;

        init();

        function init() {

        };

        function rootInit() {

        };

        function back() {

        }

        function active_tab () {

        }

        function next () {

        }

    }
})();