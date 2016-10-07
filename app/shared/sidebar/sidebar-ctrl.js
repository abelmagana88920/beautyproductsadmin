;(function (){
    'use strict';

    angular
        .module('app')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['$scope', '$state', '$stateParams', '$cookies'];

    function SidebarCtrl ($scope, $state, $stateParams, $cookies) {
        var vm = this;
    }

})();