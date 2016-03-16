
angular.module('uiGrid', [])
  .directive('uiGrid', () => ({
    scope: {},

    bindToController: {
      options: '=uiGrid'
    },

    controller  : 'UiGridCtrl',
    controllerAs: 'grid',

    templateUrl: './grid-template.html'
  }))

  .directive('uiGridMoveColumns', () => ({
    scope: {},

    bindToController: {
      options: '=uiGrid'
    },

    controller  : 'UiGridMoveColumnsCtrl',
    controllerAs: 'moveColumns'
  }));