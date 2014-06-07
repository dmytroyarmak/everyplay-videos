'use strict';

EP.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    this.navigate('videos', {
      trigger: true,
      replace: true
    });
  }
});
