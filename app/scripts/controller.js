'use strict';

EP.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
  },

  showVideos: function() {
    var videosListView = this._createVideosListView(),
        gamesFilterView = this._createGamesFilterView(),
        videosLayout = this._createVideosLayout();

    videosLayout.on('show', function() {
      videosLayout.gamesFilterRegion.show(gamesFilterView);
      videosLayout.videosListRegion.show(videosListView);
    });

    this._mainRegion.show(videosLayout);
  },

  showVideo: function(videoId) {

  },

  _createVideosListView: function() {
    var view = new EP.Views.VideosList({
      collection: this._getVideosCollection()
    });
    return view;
  },

  _createGamesFilterView: function() {
    var view = new EP.Views.GamesFilter({
      collection: this._getGamesCollection()
    });
    return view;
  },

  _createVideosLayout: function() {
    var layout = new EP.Views.VideosLayout();
    return layout;
  },

  _getVideosCollection: function() {
    this._videos = this._videos || this._createVideosCollection();
    return this._videos;
  },

  _createVideosCollection: function() {
    var collection = new EP.Collections.Videos();
    collection.fetch();
    return collection;
  },

  _getGamesCollection: function() {
    this._games = this._games || this._createGamesCollection();
    return this._games;
  },

  _createGamesCollection: function() {
    var collection = new EP.Collections.Games();
    collection.fetch();
    return collection;
  }
});
