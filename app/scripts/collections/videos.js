'use strict';

EP.Collections.Videos = Backbone.Collection.extend({
  url: 'https://everyplay.com/api/videos?order=created_at&client_id=f950e92afabc2aa72f08e40fa86024cbb5deeaee&offset=0&limit=24',
  model: EP.Models.Video
});
