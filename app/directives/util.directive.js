;(function (){
    'use strict';

    angular
        .module('app')
        .directive('uSortPageDirective', uSortPageDirective);
 
        function uSortPageDirective() {
                return {
                        restrict: 'E',
                       
                        templateUrl: 'app/directives/dir_view/uSortPageDirective.html',
                        scope: {
                             sortKey: '@',
                             reverse: '@',
                             label: '@',
                             value: '@'
                        },
                        controller: function ($scope) { 
                              $scope.sort = function(keyname){
                                     $scope.sortKey = keyname;   //set the sortKey to the param passed
                                     $scope.reverse = !$scope.reverse; //if true make it false and vice versa
                              }
                        
                        },
                       
                        link: function($scope, element, attrs) {
                                       
                        }
                };
        }
})();