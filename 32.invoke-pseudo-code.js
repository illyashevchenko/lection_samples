function instantiatePseudo(controller, locals, bindings) {
  var instance = Object.create(controller.prototype); // Somewhere in $ControllerProvider

  $compile.__initializeDirectiveBindings(instance, bindings); // somewhere in $compile

  return controller.apply(instance, locals); // $injector.invoke()
}


$controller = function (controller, locals, later) {
  var instance = Object.create(controller.prototype);

  if (later) {
    return angular.extend(function () {
      return controller.apply(instance, locals);
    }, {
      instance: instance
    });
  }
};


function ItemsListCtrl() {
  this.select(this.list[0]);
}


ItemsListCtrl.prototype.select = function (item) {
  this.selected = item;
};


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
