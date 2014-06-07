'use strict';

var EP = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

EP.addRegions({
  mainRegion: '.main-region'
});

EP.addInitializer(function() {
  var router = new EP.Router(),
  controller = new EP.Controller({
    router: router,
    mainRegion: this.mainRegion
  });

  router.processAppRoutes(controller, {
    'videos': 'showLatestVideos',
    'videos/:id': 'showVideo'
  });
});

EP.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
