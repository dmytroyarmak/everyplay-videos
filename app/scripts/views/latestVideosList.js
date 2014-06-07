'use strict';

EP.Views.LatestVideosList = Marionette.CompositeView.extend({
  template: '#tpl-latest-videos-list',
  itemView: EP.Views.LatestVideosListItem,
  itemViewContainer: '.latest-videos-container'
});
