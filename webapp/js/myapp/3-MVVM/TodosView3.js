define([
    'backbone', 'knockout', 'knockback',
    'text!textassets/myapp/3-MVVM/todos3.html'
], function (Backbone, ko, kb, todosHtml) {
    'use strict';

    var TodoItemVM = kb.ViewModel.extend({
        constructor: function (bbModel, options) {
            kb.ViewModel.prototype.constructor.apply(this, arguments);
            void options;
            this.onRemoveItem = _.bind(bbModel.destroy, bbModel);
            this.id = bbModel.id;
        }
    });

    var TodosView = Backbone.View.extend({
        initialize: function () {
            console.assert(!!this.options.model);
        },

        render: function () {
            var self = this;

            self.viewModel = {
                todos: kb.collectionObservable(self.model, {
                    factories: {
                        models: TodoItemVM
                    }
                }),
                newTodoTitle: ko.observable(''),
                onSubmit: function () {
                    self.model.add({ title: this.newTodoTitle(), completed: false });
                    this.newTodoTitle('');
                }
            };

            self.$el.html(todosHtml);
            ko.applyBindings(self.viewModel, self.$el[0]);

            return self;
        }

    });

    return TodosView;
});
