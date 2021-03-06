'use strict';

EP.Models.Video = Backbone.Model.extend({
  urlRoot: 'videos',

  defaults: {
    id: null,
    title: null,
    thumbnailUrl: null,
    posterUrl: null,
    mp4Url: null,
    hlsUrl: null,
    authorName: null,
    authorAvatarUrl: null,
    datePosted: null
  },

  parse: function(data, options) {
    return {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      posterUrl: data.base_url + data.thumbnail_files.high,
      mp4Url: data.base_url + data.video_files.high,
      hlsUrl: data.base_url + data.video_files.hls,
      authorName: data.user.username,
      authorAvatarUrl: data.user.avatar_url_small,
      datePosted: new Date(data.created_at)
    };
  }
});
