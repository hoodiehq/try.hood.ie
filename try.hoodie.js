/* global jQuery, createApp */

(function($){
  'use strict';

  $('form[action=create]').on('submit',function(event){
    event.preventDefault();
    var $form = $(event.target);
    var subdomain = $('input[name=subdomain]').val();

    $form.addClass('loading');
    createApp(subdomain).then(onSuccess, onError);

    function onSuccess(subdomain){
      $form.removeClass('loading');
      var $next = $('.current').removeClass('current').next().addClass('current');
      $next.html( $next.html().replace(/subdomain/g, subdomain) );
    }

    function onError(error){
      $form.removeClass('loading');
      alert(error.message);
    }
  });
})(jQuery);
