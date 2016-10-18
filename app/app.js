(function(){
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngCookies',
            'ui.bootstrap',
            'toastr',
            'dataGrid', 'pagination', 'ngMaterial',
            'sticky',
            //'tableSort',
            'angularUtils.directives.dirPagination',
            'ngMaterial'
            //'hl.sticky'
        ])
        .config(router);


    function router ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('app', {
                abstract:true,
                url : '/',
                views : {
                    'topbar' : { 
                        templateUrl  : 'app/shared/nav/navbar.html',
                        controller   : 'NavCtrl',
                        controllerAs : 'vm'  
                    },
                    'sidebar' : { 
                        templateUrl  : 'app/shared/sidebar/sidebar.html',
                        controller   : 'SidebarCtrl',
                        controllerAs : 'vm'
                    },
                    'content' : { 
                        templateUrl  : 'app/components/content/content.html',
                        controller   : 'ContentCtrl',
                        controllerAs : 'vm'
                    }
                }            
            })

            .state('app.dashboard', {
                url             : 'dashboard',  
                templateUrl     : 'app/components/dashboard/dashboard.html',
                controller      : 'DashboardCtrl',
                controllerAs    : 'vm'
            })

            .state('app.comment', {
                url             : 'comment',  
                templateUrl     : 'app/components/comment/comment.html',
                controller      : 'CommentCtrl',
                controllerAs    : 'vm'
            })

            .state('app.customer', {
                url             : 'customer',  
                templateUrl     : 'app/components/customer/customer.html',
                controller      : 'CustomerCtrl',
                controllerAs    : 'vm'
            })

             .state('app.customer-profile', {
                url             : 'customer-profile/:id',  
                templateUrl     : 'app/components/customer-profile/customer-profile.html',
                controller      : 'CustomerProfileCtrl',
                controllerAs    : 'vm'
            })

            .state('app.account', {
                url             : 'dashboard',  
                templateUrl     : 'app/components/dashboard/dashboard.html',
                controller      : 'DashboardCtrl',
                controllerAs    : 'vm'
            })

            .state('app.material', {
                url             : 'material',  
                templateUrl     : 'app/components/material/index.html',
                controller      : 'myAppController',
                controllerAs    : 'vm'
            })

            .state('login', {
                url : '/login',
                views : {
                    'content' : { 
                        templateUrl  : 'app/components/login/login.html',
                        controller   : 'LoginCtrl',
                        controllerAs : 'vm'
                    }
                }
            })

    }

})();