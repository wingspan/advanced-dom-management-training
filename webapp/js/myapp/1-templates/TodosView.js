define([
    'underscore', 'backbone', 'mustache',
    'text!textassets/myapp/1-templates/todos.html'
], function (_, Backbone, Mustache, todosHtml) {
    'use strict';


    return Backbone.View.extend({

        initialize: function () {
            console.assert(!!this.options.model);
        },

        render: function (todoItems) {

            // [{"id": "todo0", "title": "hello", "completed": false},
            //  {"id": "todo1", "title": "foobar", "completed": true}]

            var todoItems = this.options.model.toJSON();
            _.each(todoItems, function (record) {
                record.todoItemClick = "_.bind(alert, undefined, 'todo item click')()";
            });

            var params = {
                todoItems: todoItems,
                todoSubmit: "_.bind(alert, undefined, 'todo submit')()"
            };

            var output = Mustache.render(todosHtml, params);
            this.$el.html(output);
        }
    });
});
