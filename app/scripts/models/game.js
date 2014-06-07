'use strict';

EP.Models.Game = Backbone.Model.extend({
  defaults: {
    id: null,
    name: null
  },

  parse: function(data, options) {
    return {
      id: data.id,
      name: data.name
    };
  }
});
