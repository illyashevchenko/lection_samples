import ItemsListCtrl from './12.es6-class-controller';

class ItemsListDefaultCtrl extends ItemsListCtrl {
  constructor() {
    super();
    this.select(this.list[0]);
  }
}

angular.module('es6Inheritance', [])
  .directive('itemsListDefault', () => ({
    scope           : {},
    bindToController: {
      list: '=itemsListDefault'
    },

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list-default.html'
  }));
