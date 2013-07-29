/** @jsx React.DOM */
define([
    'underscore', 'jquery', 'backbone', 'react', 'uuid',
    'myapp/5-MVC/TodosView5'
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


    function Controller(domEl) {
        this.cmp = null;
        this.domEl = domEl;
        this.model = new TodoListCollection();

        this.render();

        var self = this;
        var promise = $.getJSON('/api/todos');
        promise.done(function (response) {
            self.model.reset(response);
        });

        this.model.on('reset add remove change', _.bind(this.render, this));
    }
    _.extend(Controller.prototype, {
        render: function () {
            var todoItems = this.model.toJSON();
            var jsx = <TodosView todoItems={todoItems} onNewTodo={this.onNewTodo} onRemoveTodo={this.onRemoveTodo} />
            this.cmp = React.renderComponent(jsx, this.domEl);
        },
        onNewTodo: function (title) {
            this.model.add({title: title});
        },
        onRemoveTodo: function (id) {
            this.model.get(id).destroy();
        },
        getTodoListValue: function () {
            console.log('');
            //this.cmp.refs.todos
        }
    });


    function entryPoint () {
        var domEl = $('[data-wspt-id="root"]')[0];
        var controller = new Controller(domEl);
        window.model = controller.model;
    }

    return { entryPoint: entryPoint };
});
