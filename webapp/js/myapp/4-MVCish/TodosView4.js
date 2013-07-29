/** @jsx React.DOM */
define([
    'underscore', 'react'
], function (_, React) {
    'use strict';


    var TodoItemView = React.createClass({
        render: function () {
            console.assert(!!this.props.model);

            var id = this.props.model.id;
            var completed = this.props.model.get('completed');
            var title = this.props.model.get('title');

            var input = (completed
                ? <input type="checkbox" checked="yes" onClick={this.onToggleComplete} id={id} ref="checkbox"/>
                : <input type="checkbox" onClick={this.onToggleComplete} id={id} ref="checkbox"/>);

            return (
                <li key={id}>
                    <div className="checkboxWrap">
                        {input}
                        <label htmlFor={id}>{title}</label>
                    </div>
                    <button onClick={this.onRemove}>&times;</button>
                </li>
            );
        },
        onToggleComplete: function () {
            var completed = this.refs.checkbox.getDOMNode().checked;
            this.props.model.set('completed', completed);
        },
        onRemove: function (e) {
            this.props.model.destroy();
        }
    });



    var TodoListView = React.createClass({
        render: function () {
            console.assert(this.props.model !== null);

            var items = this.props.model.map(function (todoItemModel) {
                void TodoItemView;
                return (<TodoItemView model={todoItemModel} />);
            });

            return (
                <div className="content">
                    <ul className="todoList">{items}</ul>
                    <form onSubmit={this.onNewTodo}>
                        <input type="text" ref="newTodoTitle" />
                    </form>
                </div>
            );
        },

        onNewTodo: function (e) {
            e.nativeEvent.preventDefault();
            var newTodoTitle = this.refs.newTodoTitle.getDOMNode().value.trim();
            this.props.model.add({ title: newTodoTitle });
            this.refs.newTodoTitle.getDOMNode().value = '';
        }
    });

    return TodoListView;
});
