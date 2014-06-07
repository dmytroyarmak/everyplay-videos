'use strict';

EP.Views.VideosLayout = Marionette.Layout.extend({
  template: '#tpl-videos-layout',
  regions: {
    gamesFilterRegion: '.js-games-filter-region',
    videosListRegion: '.js-videos-list-region'
  }
});
