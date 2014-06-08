'use strict';

EP.Collections.Games = Backbone.Collection.extend({
  url: 'games',
  model: EP.Models.Game
});
