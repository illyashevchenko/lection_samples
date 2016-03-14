class ItemsListCtrl {
  constructor() {
    this.selected = this.list[0];
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('isolatedScope', [])
  .directive('itemsList', () => ({
    scope           : {},
    bindToController: {
      list: '=itemsList'
    },

    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <div ng-bind   = "ctrl.selected"></div>
               <input ng-model = "ctrl.version" />`
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);
