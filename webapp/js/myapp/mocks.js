define([
    'underscore', 'jquery',
    'underscore-string', 'mockjax'
], function (_, $) {
    'use strict';


    /**
     * Installing and uninstalling mocks at runtime should probably
     * require a page refresh, so that all requests come from a
     * consistent application state.
     */
    function install() {

        _.extend($.mockjaxSettings, {
            responseTime: 500,
            contentType: 'text/json',
            logging: false
        });


        $.mockjax({
            url: '/api/todos',
            type: 'GET',
            proxy: 'mocks/api/todos.json'
        });

    }


    function uninstall() {
        $.mockjaxClear();
    }


    return {
        install: install,
        uninstall: uninstall
    };
});
