define([
    'underscore', 'jquery', 'backbone',
    'myapp/1-templates/TodosView'
], function (_, $, Backbone, TodosView) {
    'use strict';

    var TodoItemModel = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },
        sync: _.identity
    });

    var TodoListCollection = Backbone.Collection.extend({
        model: TodoItemModel,
        sync: _.identity
    });



    function entryPoint () {

        var model = new TodoListCollection();

        var view = new TodosView({ model: model });
        view.render();
        $('[data-wspt-id="root"]').html(view.$el);

        var promise = $.getJSON('/api/todos');
        promise.done(function (response) {
            model.reset(response);
        });

        model.on('reset', _.bind(view.render, view));
    }

    return { entryPoint: entryPoint };
});
