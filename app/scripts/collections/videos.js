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

  /**
   * Data that will be passed to API when fetch
   * @type {Object}
   */
  fetchData: {
    order: 'created_at'
  },

  fetch: function(options) {
    options = options || {};
    options.data = _.extend(options.data || {}, this.fetchData);
    return Backbone.Collection.prototype.fetch.call(this, options);
  },

  /**
   * Set filter by game's id to collection and fetch new records.
   * @param  {number} gameId - id of game to filter videos by
   */
  setFilterByGameId: function(gameId) {
    if (this._gameId !== gameId) {
      this._gameId = gameId;
      this.fetch({reset: true});
    }
  },

  /**
   * Unset filter by game's id to collection and fetch new records.
   */
  unsetFilterByGameId: function() {
    if (this._gameId) {
      this._gameId = null;
      this.fetch({reset: true});
    }
  }
});
