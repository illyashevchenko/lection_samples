angular.module('es5Inheritance')
  .factory('ItemsListCtrlFactory', ItemsListCtrlFactory);


function ItemsListCtrlFactory() {
  function ItemsListCtrl() {
    this.selected = null;
  }


  ItemsListCtrl.prototype.select = function (item) {
    this.selected = item;
  };

  return ItemsListCtrl;
}
