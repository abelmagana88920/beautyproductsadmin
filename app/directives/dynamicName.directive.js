;(function (){
    'use strict';

    angular
        .module('app')
        .directive('dynamicName', dynamicName);

   function dynamicName ($compile, $parse) {
      return {
        restrict: 'A',
        terminal: true,
        priority: 100000,
        link: function(scope, elem) {
         var name = $parse(elem.attr('dynamic-name'))(scope);
          // $interpolate() will support things like 'skill'+skill.id where parse will not
             
          elem.removeAttr('dynamic-name');
          elem.attr('name', name);
          $compile(elem)(scope); 
        }
      };
    }

})();


  