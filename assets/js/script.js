$(document).ready(function() {
    'use strict';

    var slideout;

    function initSlideout() {
        slideout = new Slideout({
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
    initSlideout();

    var options = {
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 1300,
                render: function($container) {
                    $container.addClass('is-exiting');
                    smoothState.restartCSSAnimations();
                    slideout.close();
                }
            },
            onReady: {
                duration: 0,
                render: function($container, $newContent) {
                    $container.removeClass('is-exiting');
                    $container.html($newContent);
                    initSlideout();
                }
            }
        },
        smoothState = $('#animate-wrapper').smoothState(options).data('smoothState');

    var resizeId;
    var windowSize = $(window).width();

    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
        if (windowSize >= 768) {
            slideout.close();
        }
    }

});
