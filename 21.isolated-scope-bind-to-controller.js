class ItemsListCtrl {
  constructor() {
    this.selected = null;
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('isolatedScope', [])
  .directive('itemsList', () => ({
    scope           : {
      list: '=itemsList'
    },
    bindToController: true,

    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <div ng-bind   = "ctrl.selected"></div>
               <input ng-model = "ctrl.version" />`
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);
