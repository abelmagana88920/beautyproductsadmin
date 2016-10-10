
          angular.module('app')
            .controller('myAppController', ['$scope', 'myAppFactory','$state','ModalService', 'QueryService','logger', function ($scope, myAppFactory,$state,ModalService, QueryService,logger) {


                var vm = this;
        
                vm.titleHeader = 'Material';
                vm.message_modal = message_modal;
                vm.data = {};

                
                function message_modal () {
                    var content =  {
                        header:'Message',
                        message:'Hello World!'
                    }
                    ModalService.confirm_modal(content);
                }




                $scope.gridOptions = {
                    data: [],
                    urlSync: false
                };
                myAppFactory.getData().then(function (responseData) {
                    $scope.gridOptions.data = responseData.data;
                })

            }])
            .factory('myAppFactory', function ($http) {
                return {
                    getData: function () {
                        return $http({
                            method: 'GET',
                            url: 'http://angular-data-grid.github.io/demo/data.json'
                        });
                    }
                }
            });