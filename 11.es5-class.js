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
    templateUrl : './items-list.html'
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);


// just for code highlighting
ItemsListCtrl.prototype.selectNext();
