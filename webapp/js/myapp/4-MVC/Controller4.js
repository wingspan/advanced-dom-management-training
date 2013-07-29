/** @jsx React.DOM */
define([
    'underscore', 'jquery', 'backbone', 'react', 'uuid',
    'myapp/4-MVC/TodosView4'
], function (_, $, Backbone, React, uuid, TodosView) {
    'use strict';

    var TodoItemModel = Backbone.Model.extend({
        defaults: function () {
            return { title: '', completed: false, id: uuid() };
        },
        sync: _.identity
    });

    var TodoListCollection = Backbone.Collection.extend({
        model: TodoItemModel,
        sync: _.identity
    });


    function entryPoint () {

        var model = new TodoListCollection();

        var domEl = $('[data-wspt-id="root"]')[0];
        void TodosView;
        var view = React.renderComponent(<TodosView model={model} />, domEl);


        model.on('add remove reset change', function () {
            view.forceUpdate();
        });


        var promise = $.getJSON('/api/todos');
        promise.done(function (response) {
            model.reset(response);
        });

        window.model = model;
    }

    return { entryPoint: entryPoint };
});
