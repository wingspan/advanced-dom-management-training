define([
    'underscore', 'backbone', 'knockout',
    'text!textassets/myapp/2-MVVM-basic/todos2.html'
], function (_, Backbone, ko, todosHtml) {
    'use strict';


    function TodoItemVM(item) {
        return {
            id: item.id,
            title: item.title,
            completed: item.completed,
            onRemoveItem: _.bind(alert, undefined, _.str.sprintf('remove item %s', item.id))
        };
    }

    return Backbone.View.extend({
        initialize: function () {
            console.assert(!!this.options.model);
        },

        render: function () {
            var self = this;

            var todoItems = self.options.model.toJSON();
            // [{"id": "todo0", "title": "hello", "completed": false},
            //  {"id": "todo1", "title": "foobar", "completed": true}]

            self.viewModel = {
                todoItems: ko.observableArray(_.map(todoItems, TodoItemVM)),
                newTodoTitle: ko.observable(''),
                onSubmit: function () {
                    self.options.model.add({ title: this.newTodoTitle(), completed: false });
                    this.newTodoTitle('');
                }
            };

            self.$el.html(todosHtml);
            ko.applyBindings(self.viewModel, self.$el[0]);

            return self;
        },

        update: function (model) {
            var todoItems = model.toJSON();
            this.viewModel.todoItems(_.map(todoItems, TodoItemVM));
        }

    });
});
