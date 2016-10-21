;(function (){
    'use strict';

    angular
       .module('app')
       .factory('ModalService', ModalService);

    ModalService.$inject = ['$uibModal'];
    function ModalService ($uibModal) {

        var service = {
            list_modal:    list_modal,
            form_modal:    form_modal,
            confirm_modal: confirm_modal,
            email_modal:   email_modal,
            message_modal: message_modal,
            customer_and_treatment_modal: customer_and_treatment_modal,
            remove_customer_modal: remove_customer_modal,
            consultation_treatment_details_modal : consultation_treatment_details_modal,
            add_treatment_modal: add_treatment_modal,
            user_profile_modal: user_profile_modal
        };

        return service;

        function list_modal (form, modal, callback) {
            var modalInstance = $uibModal.open({ 
                'templateUrl'   : 'app/shared/modals/list-modal/list-modal.html',
                'controller'    : 'ListModalCtrl',
                'controllerAs'  : 'vm',
                'size'          : 'md',
                'backdrop'      : true,
                'resolve'       : {
                    form : function () {
                        return form;
                    },
                    modal : function () {
                        return modal;
                    }
                }
            })
            .result.then( function (data) {
                if (data) {
                    callback(data);
                }
            });
        }

        function form_modal (form, type, modal, callback) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/tab-modal/tab-modal.html',
                'controller'    : 'TabModalCtrl',
                'controllerAs'  : 'vm',
                'size'          : 'md',
                'backdrop'      : false,
                'resolve'       : {
                    form : function () {
                        return form;
                    },
                    modal : function () {
                        return modal;
                    },
                    type : function () {
                        return type;
                    }
                }
            })
            .result.then( function (data) {
                if (data) {
                    callback(data);
                }
            });

        }

        function confirm_modal (msg, callback) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/confirmation-modal/confirmation-modal.html',
                'controller'    : 'ConfirmationModalCtrl',
                'controllerAs'  : 'vm',
                'size'          : 'sm',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            })
            .result.then( function (data) {
                if (data) {
                    callback(data);
                };
            });
        }

        function email_modal (data, callback) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/invitation-modal/invitation-modal.html',
                'controller'    : 'InvitationCtrl',
                'controllerAs'  : 'vm',
                'size'          : 'sm',
                'backdrop'      : true,
                'resolve'       : {
                    Data        : function () {
                        return data;
                    }
                }
            })
            .result.then( function (data) {
                if (data) {
                    return callback(data);
                };
            });
        }

        function message_modal (msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/message-modal/message-modal.html',
                'controller'    : 'MessageModalCtrl',
                'controllerAs'  : 'vm',
                'size'          : 'sm',
                'backdrop'      : true,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }

         function customer_and_treatment_modal (msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/customer-and-treatment-modal/customer-and-treatment-modal.html',
                'controller'    : 'CustomerAndTreatmentModalCtrl',
                'controllerAs'  : 'vm',
                'windowClass'   : "customer-and-treatment-modal-class",
                'size'          : 'sm',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }

        function remove_customer_modal (msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/remove-customer-modal/remove-customer-modal.html',
                'controller'    : 'RemoveCustomerModalCtrl',
                'controllerAs'  : 'vm',
                /*'windowClass'   : "customer-and-treatment-modal-class", */
                'size'          : 'sm',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }

         function consultation_treatment_details_modal(msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/consultation-treatment-details-modal/consultation-treatment-details-modal.html',
                'controller'    : 'ConsultationTreatmentDetailsModalCtrl',
                'controllerAs'  : 'vm',
                /*'windowClass'   : "customer-and-treatment-modal-class", */
                'size'          : 'sm',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }

        function add_treatment_modal(msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/add-treatment-modal/add-treatment-modal.html',
                'controller'    : 'AddTreatmentModalCtrl',
                'controllerAs'  : 'vm',
                /*'windowClass'   : "customer-and-treatment-modal-class", */
                'size'          : 'sm',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }


        function user_profile_modal(msg) {
            var modalInstance = $uibModal.open({
                'templateUrl'   : 'app/shared/modals/user-profile-modal/user-profile-modal.html',
                'controller'    : 'UserProfileModalCtrl',
                'controllerAs'  : 'vm',
                /*'windowClass'   : "customer-and-treatment-modal-class", */
                'size'          : 'md',
                'backdrop'      : false,
                'resolve'       : {
                    message     : function () {
                        return msg;
                    }
                }
            });
        }

    }

})();