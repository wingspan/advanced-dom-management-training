/* global require */
(function () {
    'use strict';

    require.config({
        baseUrl: 'js-built', // you must continuously run the jsx filesystem watcher
        paths: {
            textassets: '../textassets', // all assets loaded via `text!` must be rooted here so the JSX compiler works.

            text: '../vendor/require-text-2.0.4',
            css: '../vendor/require-css-0.3.1',
            underscore: '../vendor/underscore-1.4.4',
            'underscore-string': '../vendor/underscore-string-2.3.0',
            jquery: '../vendor/jquery-1.9.1',
            mockjax: '../vendor/mockjax-1.5.2-SNAPSHOT',
            backbone: '../vendor/backbone-1.0.0',
            kendo: '../vendor/kendo-web-gpl-2013.1.514/js/kendo.web.min',
            knockout: '../vendor/knockout-2.3.0.debug',
            knockback: '../vendor/knockback-0.17.2',
            moment: '../vendor/moment-2.0.0',
            flexpaper: '../vendor/flexpaper/flexpaper-2.1.2',
            nicescroll: '../vendor/jquery-nicescroll-3.4.1',
            plupload: '../vendor/plupload-1.5.7/plupload',
            'plupload-html4': '../vendor/plupload-1.5.7/plupload.html4',
            'plupload-html5': '../vendor/plupload-1.5.7/plupload.html5',
            'plupload-flash': '../vendor/plupload-1.5.7/plupload.flash',
            react: '../vendor/react-0.4.0',
            jsx: '../vendor/jsx',
            JSXTransformer: '../vendor/JSXTransformer',
            'react-backbone': '../vendor/react-backbone',
            'es5-shim': '../vendor/es5-shim-c52c7eb',
            'es5-sham': '../vendor/es5-sham-c52c7eb',
            'es6-date-shim': '../vendor/date_iso8601_polyfill_es6',
            'console-shim': '../vendor/console-shim',
            'mustache': '../vendor/mustache-0.7.2'
        },
        shim: {
            'underscore': { deps: [], exports: '_' },
            'underscore-string': { deps: ['underscore'] },
            'jquery': { deps: [], exports: '$' },
            'mockjax': { deps: ['jquery'] },
            'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
            'kendo': { deps: ['jquery'], exports: 'kendo' },
            'knockout': { deps: ['jquery'], exports: 'ko' },
            'knockback': { deps: ['backbone', 'knockout'], exports: 'kb' },
            'moment': { deps: [], exports: 'moment' },
            'flexpaper': { deps: ['jquery'], exports: '$FlexPaper' },
            'nicescroll': { deps: ['jquery'], exports: 'NiceScroll' },
            'plupload': { deps: ['jquery'], exports: 'plupload' },
            'plupload-html4': { deps: ['jquery', 'plupload'] },
            'plupload-html5': { deps: ['jquery', 'plupload'] },
            'plupload-flash': { deps: ['jquery', 'plupload'] },
            'react': { deps: [], exports: 'React'},
            'JSXTransformer': { exports: 'JSXTransformer' }
            //'react-backbone': { deps: ['react', 'backbone', 'underscore'] }
        }
    });
})();
