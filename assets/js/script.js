$(document).ready(function() {
    slideout();
});

function slideout() {
    var slideout = new Slideout({
      'panel': document.getElementById('slideout-content'),
      'menu': document.getElementById('slideout-nav'),
      'padding': 256,
      'tolerance': 70,
      'side': 'right'
    });

    $('.mobile-nav__icon').on('click', function() {
        slideout.toggle();
    });
}

$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 860,
      render: function ($container) {
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        $container.removeClass('is-exiting');
        $container.html($newContent);
      }
    },
    onAfter: function() {
        slideout();
    }
  },
  smoothState = $('#animate-wrapper').smoothState(options).data('smoothState');
});
