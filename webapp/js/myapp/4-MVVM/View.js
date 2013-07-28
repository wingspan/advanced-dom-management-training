define([
    'backbone', 'knockout', 'knockback',
    'text!textassets/myapp/4-MVVM/todo.html'
], function (Backbone, ko, kb, tutorialHtml) {
    'use strict';

    var TodoItemVM = kb.ViewModel.extend({
        constructor: function (bbModel, options) {
            kb.ViewModel.prototype.constructor.apply(this, arguments);
            void options;
            this.onRemoveItem = function () {
                bbModel.destroy();
            };
        }
    });

    var TutorialView = Backbone.View.extend({
        initialize: function (options) {
            void options;
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
                    console.log(self.model);
                    self.model.add({ id: "tutorail" + Math.random(), title: this.newTodoTitle(), completed: false });
                    this.newTodoTitle('');
                }
            };

            self.$el.html(tutorialHtml);
            ko.applyBindings(self.viewModel, self.$el[0]);

            return self;
        }

    });

    return TutorialView;
});
