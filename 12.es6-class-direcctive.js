import ItemsListCtrl from './12.es6-class-controller';

angular.module('controllerAsRecipe', [])
  .directive('itemsList', () => ({
    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <input ng-model = "ctrl.version" />`
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);
