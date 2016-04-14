function ItemsListDefaultCtrl($controller, ItemsListCtrlFactory, $scope) {

  function ItemsListDefaultCtrl() {
    ItemsListCtrlFactory.apply(this, arguments);

    this.select(this.list[0]);
  }

  var _super = ItemsListCtrlFactory.prototype;

  ItemsListDefaultCtrl.prototype = Object.create(_super);

  return $controller(ItemsListDefaultCtrl, { $scope });
}


angular.module('es5Inheritance', [])
  .directive('itemsListDefault', () => ({
    scope           : {
      list: '=itemsListDefault'
    },
    bindToController: true,

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list-default.html'
  }));
