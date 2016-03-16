angular.module('uiGrid', [])
  .directive('uiGrid', () => ({
    scope: true,

    bindToController: {
      options: '=uiGrid'
    },

    controller  : 'UiGridCtrl',
    controllerAs: 'grid',

    templateUrl: './grid-template.html'
  }))

  .directive('uiGridMoveColumns', () => ({
    scope: true,

    bindToController: {
      options: '=uiGrid'
    },

    controller  : 'UiGridMoveColumnsCtrl',
    controllerAs: 'moveColumns'
  }));
