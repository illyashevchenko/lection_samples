function $controllerInstantiate(expression, locals) {
  var instance = Object.create(expression.prototype);
  return expression.apply(instance, locals)
}



angular.module('isolatedScope', [])
  .directive('itemsList', () => ({
    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',
    scope: {
      list: '=itemsList'
    },
    bindToController: true,

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <div ng-bind   = "ctrl.selected"></div>
               <input ng-model = "ctrl.version" />`
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);


function ItemsListCtrl() {
  this.selected = this.list[0];
}


ItemsListCtrl.prototype.select = function (item) {
  this.selected = item;
};

