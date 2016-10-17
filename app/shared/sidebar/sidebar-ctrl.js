;(function (){
    'use strict';

    angular
        .module('app')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['$scope', '$state', '$stateParams', '$cookies'];

    function SidebarCtrl ($scope, $state, $stateParams, $cookies) {
        var vm = this;
        
        vm.getClassActive = getClassActive;

        function getClassActive(path) {
          var cur_path = $location.path().substr(0, path.length);
          if (cur_path == path) {
              if($location.path().substr(0).length > 1 && path.length == 1 )
                  return "";
              else
                  return "active";
          } else {
              return "";
          }
        }

    }

})();