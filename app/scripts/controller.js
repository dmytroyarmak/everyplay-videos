'use strict';

EP.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
  },

  showVideos: function() {
    var videosLayout = this._createVideosLayout();
    this._mainRegion.show(videosLayout);
    this._router.navigate('videos');
  },

  showVideo: function(videoId) {
    var videoView = this._createVideoView(videoId);
    this._mainRegion.show(videoView);
    this._router.navigate('videos/' + videoId);
  },

  _createVideosLayout: function() {
    var layout = new EP.Views.VideosLayout(),
        gamesFilterView = this._createGamesFilterView(),
        videosListView = this._createVideosListView();

    layout.on('show', function() {
      layout.gamesFilterRegion.show(gamesFilterView);
      layout.videosListRegion.show(videosListView);
    });

    return layout;
  },

  _createVideosListView: function() {
    var videos = this._getVideosCollection(),
        view = new EP.Views.VideosList({
          collection: videos
        });

    videos.unsetFilterByGameId();

    this.listenTo(view, 'video:clicked', function(view) {
      this.showVideo(view.model.id);
    });

    return view;
  },

  _createGamesFilterView: function() {
    var view = new EP.Views.GamesFilter({
      collection: this._getGamesCollection()
    });

    this.listenTo(view, 'game:selected', this._filterVideosByGame);

    return view;
  },

  _createVideoView: function(videoId) {
    var view = new EP.Views.Video({
      model: this._getVideoById(videoId)
    });

    return view;
  },

  _getVideosCollection: function() {
    this._videos = this._videos || this._createAndFetchVideosCollection();
    return this._videos;
  },

  _createAndFetchVideosCollection: function() {
    var collection = new EP.Collections.Videos();
    collection.fetch();
    return collection;
  },

  _getGamesCollection: function() {
    this._games = this._games || this._createAndFetchGamesCollection();
    return this._games;
  },

  _createAndFetchGamesCollection: function() {
    var collection = new EP.Collections.Games();
    collection.fetch();
    return collection;
  },

  _filterVideosByGame: function(gameId) {
    var videos = this._getVideosCollection();
    videos.setFilterByGameId(gameId);
  },

  _getVideoById: function(videoId) {
    return this._getVideoFromVideosCollection(videoId) || this._createAndFetchVideoModel(videoId);
  },

  _getVideoFromVideosCollection: function(videoId) {
    if (this._videos) {
      return this._videos.get(videoId);
    }
  },

  _createAndFetchVideoModel: function(videoId) {
    var model = new EP.Models.Video({
      id: videoId
    });

    model.fetch();

    return model;
  }
});
