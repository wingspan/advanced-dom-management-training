define([
    'underscore', 'jquery', 'backbone', 'uuid',
    'myapp/2-MVVM-basic/TodosView2'
], function (_, $, Backbone, uuid, TodosView) {
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

        var view = new TodosView({ model: model });
        view.setElement($('[data-wspt-id="root"]'));
        view.render();

        var promise = $.getJSON('/api/todos');
        promise.done(function (response) {
            model.reset(response);
        });

        model.on('add remove reset', _.bind(view.updateView, view));
    }

    return { entryPoint: entryPoint };
});
