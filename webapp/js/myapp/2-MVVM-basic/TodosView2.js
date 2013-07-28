define([
    'underscore', 'backbone', 'knockout',
    'text!textassets/myapp/2-MVVM-basic/todos2.html'
], function (_, Backbone, ko, todosHtml) {
    'use strict';


    function TodoItemVM(todoItemModel) {
        var vm = {
            id: todoItemModel.id,
            title: todoItemModel.get('title'),
            completed: ko.observable(todoItemModel.get('completed')),
            onRemoveItem: _.bind(todoItemModel.destroy, todoItemModel)
        };
        return vm;
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
                todoItems: ko.observableArray(self.options.model.map(TodoItemVM)),
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

        updateView: function () {
            this.viewModel.todoItems(this.options.model.map(TodoItemVM));
        }

//        ,updateModel: function () {
//            var model = this.options.model;
//            var todoItemsVM = this.viewModel.todoItems();
//            _.each(todoItemsVM, function (itemVM) {
//                model.set('completed', itemVM.completed());
//            });
//        }

    });
});
