'use strict';

EP.Views.VideosListItem = Marionette.ItemView.extend({
  template: '#tpl-videos-list-item',
  triggers: {
    'click .js-video-thumbnail': 'clicked'
  }
});
