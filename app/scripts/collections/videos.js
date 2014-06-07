'use strict';

EP.Collections.Videos = Backbone.Collection.extend({
  url: 'https://everyplay.com/api/videos?order=created_at&client_id=f950e92afabc2aa72f08e40fa86024cbb5deeaee',
  model: EP.Models.Video,

  filterByGameId: function(gameId) {
    if (gameId) {
      this.fetch({
        url: 'https://everyplay.com/api/games/' + gameId + '/videos?order=created_at&client_id=336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40'
      });
    } else {
      this.fetch();
    }
  }
});
