class ItemsListCtrl {
  constructor() {
    this.list     = ['1.3', '1.4', '1.5', '2.0'];
    this.selected = null;
  }


  select(item) {
    this.selected = item;
  }

  selectNext() {
    let index = this.list.indexOf(this.selected) + 1;
    index     = Math.min(this.list.length - 1, index);

    this.select(this.list[index]);
  }
}

 angular.module('controllerAsRecipe', [])
.directive('itemsList', () => ({
  controller  : ItemsListCtrl,
  controllerAs: 'ctrl',

  template: `<div ng-repeat  = "item in ctrl.list | filter : ctrl.version"
                  ng-click   = "ctrl.select(item)">{{ item }}</div>
             <h3 ng-bind     = "ctrl.selected"></h3>
             <input ng-model = "ctrl.version" />`
}));