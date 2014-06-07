'use strict';

EP.Views.Video = Marionette.ItemView.extend({
  template: '#tpl-video',
  modelEvents: {
    'change': 'render'
  }
});
