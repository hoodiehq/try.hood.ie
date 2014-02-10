/* global jQuery */
(function(window, $){
  'use strict';

  window.createApp = function createApp (name) {
    var defer = $.Deferred();
    setTimeout( function() {
      defer.resolve(name);
    }, 2000 );
    if( /fail/.test(name) ) {
      defer.reject(new Error('Something went wrong'));
    }
    return defer.promise();
  };
})(window, jQuery);
