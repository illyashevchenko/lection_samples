angular.module('dotComponent')
  .component('itemsListDefault', {
    bindings  : {
      list: '<'
    },

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list-default.html'
  });