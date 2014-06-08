'use strict';

/**
 * A main router for application.
 * All routes will be attached by modules dynamically.
 */
EP.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'navigateToHomePath'
  },

  /**
   * Navigate to home path by replacing current and trigger new route.
   */
  navigateToHomePath: function() {
    this.navigate(this._homePath, {
      trigger: true,
      replace: true
    });
  },

  /**
   * Set home path for router
   * @param  {string} path - new router's home path
   */
  setHomePath: function(path) {
    this._homePath = path;
  }
});
