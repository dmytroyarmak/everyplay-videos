'use strict';

EP.Views.VideosList = Marionette.CollectionView.extend({
  itemView: EP.Views.VideosListItem,
  itemViewEventPrefix: 'video'
});
