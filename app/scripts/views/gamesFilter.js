'use strict';

EP.Views.GamesFilter = Marionette.ItemView.extend({
  template: '#tpl-games-filter',
  collectionEvents: {
    'sync': 'render'
  }
});
