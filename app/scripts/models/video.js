'use strict';

EP.Models.Video = Backbone.Model.extend({
  defaults: {
    title: null,
    thumbnailUrl: null,
    authorName: null
  },

  parse: function(data, options) {
    return {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      authorName: data.user.username
    };
  }
});
