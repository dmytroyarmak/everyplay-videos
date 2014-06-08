'use strict';

var EP = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

// Initialize main region of application
EP.addInitializer(function() {
  EP.addRegions({
    mainRegion: '.js-main-region'
  });
});

// Configure AJAX requests
EP.addInitializer(function(params) {
  Backbone.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    // Add prefix with base url for API
    options.url = params.apiBaseUrl + options.url;
    // Add client_id to all requests
    options.data = $.param(_.extend(originalOptions.data || {}, {
      client_id: params.clientId
    }));
  });
});

// Create router instance
EP.addInitializer(function() {
  EP.router = new EP.Router();
});

// Initialize videos module
EP.addInitializer(function() {
  var controller = new EP.Controller({
    router: EP.router,
    mainRegion: this.mainRegion
  });

  EP.router.processAppRoutes(controller, {
    'videos': 'showVideos',
    'videos/:id': 'showVideo'
  });

  EP.router.setHomePath('videos');
});

// Start Backbone history after application's initialization
EP.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
