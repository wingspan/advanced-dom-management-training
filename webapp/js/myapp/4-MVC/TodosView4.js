/** @jsx React.DOM */
define([
    'underscore', 'react'
], function (_, React) {
    'use strict';


    var TodoItemView = React.createClass({
        render: function () {
            console.assert(!!this.props.id);
            console.assert(this.props.title !== undefined);
            console.assert(this.props.completed !== undefined);

            var onToggleComplete = _.bind(alert, undefined, 'toggle');
            var onRemove = _.bind(alert, undefined, 'remove');

            return (
                <li>
                    <div className="checkboxWrap">
                        <input type="checkbox" checked={this.props.completed} onClick={onToggleComplete} id={this.props.id} />
                        <label htmlFor={this.props.id}>{this.props.title}</label>
                    </div>
                    <button onClick={onRemove}>&times;</button>
                </li>
            );
        }
    });



    var TodoListView = React.createClass({
        render: function () {
            console.assert(this.props.todoItems);

            var items = _.map(this.props.todoItems, function (record) {
                void TodoItemView;
                return (
                    <TodoItemView id={record.id} title={record.title} completed={record.completed} />
                );
            });

            var onSubmit = function () {
                alert('submit form');
                return false;
            };


            return (
                <div className="content">
                    <ul className="todoList">{items}</ul>
                    <form onSubmit={onSubmit}>
                        <input type="text" ref="newTodoTitle" placeholder="buy milk" autofocus></input>
                    </form>
                </div>
            );
        }
    });

    return TodoListView;
});
