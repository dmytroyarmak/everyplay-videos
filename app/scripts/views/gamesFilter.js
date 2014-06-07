'use strict';

EP.Views.GamesFilter = Marionette.ItemView.extend({
  template: '#tpl-games-filter',
  ui: {
    gamesFilterSelect: '.js-games-filter-select'
  },

  events: {
    'change @ui.gamesFilterSelect': 'onChangeGamesFilterSelect'
  },

  collectionEvents: {
    'sync': 'render'
  },

  onChangeGamesFilterSelect: function() {
    this.trigger('game:selected', this.ui.gamesFilterSelect.val());
  },
});
