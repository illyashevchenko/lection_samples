import ItemsListCtrl from './12.es6-class-controller';

angular.module('controllerAsClass', [])
  .directive('itemsList', () => ({
    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',
    templateUrl : './items-list.html'
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);
