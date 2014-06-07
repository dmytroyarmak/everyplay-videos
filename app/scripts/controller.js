'use strict';

EP.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
  },

  showLatestVideos: function() {
    var latestVideosListView = this._createLatestVideosListView();

    this._mainRegion.show(latestVideosListView);
  },

  showVideo: function(videoId) {

  },

  _createLatestVideosListView: function() {
    var view = new EP.Views.LatestVideosList({
      collection: this._getLatestVideosCollection()
    });
    return view;
  },

  _getLatestVideosCollection: function() {
    this._latestVideos = this._latestVideos || this._createLatestVideosCollection();
    return this._latestVideos;
  },

  _createLatestVideosCollection: function() {
    var collection = new EP.Collections.Videos();
    collection.fetch();
    return collection;
  }
});
