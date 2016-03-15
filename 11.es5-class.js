function ItemsListCtrl() {
  this.list     = ['1.3', '1.4', '1.5'];
  this.selected = null;
}


ItemsListCtrl.prototype.select = function (item) {
  this.selected = item;
};


ItemsListCtrl.prototype.selectNext = function () {
  let index = this.list.indexOf(this.selected) + 1;
  index     = Math.min(this.list.length - 1, index);

  this.select(this.list[index]);
};


angular.module('controllerAsClass', [])
  .directive('itemsList', () => ({
    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <div ng-bind   = "ctrl.selected"></div>
               <input ng-model = "ctrl.version" />`
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);


// just for code highlighting
ItemsListCtrl.prototype.selectNext();
