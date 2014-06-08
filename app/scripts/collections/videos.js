'use strict';

EP.Collections.Videos = Backbone.Collection.extend({
  url: function() {
    if (this._gameId) {
      return 'games/' + this._gameId + '/videos';
    } else {
      return 'videos';
    }
  },

  model: EP.Models.Video,

  fetchData: {
    order: 'created_at'
  },

  fetch: function(options) {
    options = options || {};
    options.data = _.extend(options.data || {}, this.fetchData);
    return Backbone.Collection.prototype.fetch.call(this, options);
  },

  setFilterByGameId: function(gameId) {
    if (this._gameId !== gameId) {
      this._gameId = gameId;
      this.fetch({reset: true});
    }
  },

  unsetFilterByGameId: function() {
    if (this._gameId) {
      this._gameId = null;
      this.fetch({reset: true});
    }
  }
});
