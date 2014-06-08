'use strict';

var EP = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

EP.addRegions({
  mainRegion: '.js-main-region'
});

EP.addInitializer(function(params) {
  // Configure AJAX requests
  Backbone.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    // Add prefix with base url for API
    options.url = params.apiBaseUrl + options.url;
    // Add client_id to all requests
    options.data = $.param(_.extend(originalOptions.data || {}, {
      client_id: params.clientId
    }));
  });
});

EP.addInitializer(function() {
  var router = new EP.Router(),
  controller = new EP.Controller({
    router: router,
    mainRegion: this.mainRegion
  });

  router.processAppRoutes(controller, {
    'videos': 'showVideos',
    'videos/:id': 'showVideo'
  });
});

EP.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
