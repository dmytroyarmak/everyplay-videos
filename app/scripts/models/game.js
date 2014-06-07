'use strict';

EP.Models.Game = Backbone.Model.extend({
  defaults: {
    id: null,
    name: null
  },

  parse: function(data, options) {
    return _.pick(data, 'id', 'name');
  }
});
