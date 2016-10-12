;(function (){
    'use strict';

    angular
        .module('app')
        .directive('uSortPageDirective', uSortPageDirective);
 
        function uSortPageDirective() {
                return {
                        restrict: 'E',
                        transclude: true,
                        templateUrl: 'app/directives/dir_view/uSortPageDirective.html',
                        scope: {
                             sortKey: '@',
                             label: '@',
                             value: '@'
                        },
                        controller: function ($scope) { 
                              
                        
                        },
                       
                        link: function($scope, element, attrs) {
                                       
                        }
                };
        }
})();