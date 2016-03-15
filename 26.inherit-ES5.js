function ItemsListDefaultCtrl($controller, ItemsListCtrlFactory, $scope) {

  function ItemsListDefaultCtrl() {
    ItemsListCtrlFactory.apply(this, arguments);

    this.select(this.list[0]);
  }

  var _super = ItemsListCtrlFactory.prototype;

  ItemsListDefaultCtrl.prototype = Object.create(_super);


  return $controller(ItemsListDefaultCtrl, {
    $scope: $scope
  });
}


angular.module('es5Inheritance', [])
  .directive('itemsListDefault', () => ({
    scope           : {
      list: '=itemsListDefault'
    },
    bindToController: true,

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <input ng-model = "ctrl.version" />`
  }));
