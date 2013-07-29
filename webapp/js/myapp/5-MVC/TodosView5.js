/** @jsx React.DOM */
define([
    'underscore', 'react'
], function (_, React) {
    'use strict';


    var TodoItemView = React.createClass({
        render: function () {
            console.assert(!!this.props.id);
            console.assert(this.props.completed !== undefined && this.props.completed !== null);
            console.assert(this.props.title !== undefined && this.props.title !== null);
            console.assert(!!this.props.onRemoveTodo);


            var input = (this.state.completed
                ? <input type="checkbox" defaultChecked="yes" onClick={this.onToggleComplete} id={this.props.id} ref="checkbox"/>
                : <input type="checkbox" onClick={this.onToggleComplete} id={this.props.id} ref="checkbox"/>);

            return (
                <li key={this.props.id}>
                    <div className="checkboxWrap">
                        {input}
                        <label htmlFor={this.props.id}>{this.props.title}</label>
                    </div>
                    <button onClick={this.onRemove}>&times;</button>
                </li>
            );
        },

        getInitialState: function() {
            return { completed: this.props.completed };
        },

        onToggleComplete: function () {
            var completed = this.refs.checkbox.getDOMNode().checked;
            this.setState({ completed: completed });
        },

        onRemove: function () {
            this.props.onRemoveTodo(this.props.id);
        }
    });



    var TodoListView = React.createClass({
        render: function () {
            console.assert(this.props.todoItems !== null && this.props.todoItems !== undefined);
            console.assert(!!this.props.onNewTodo);
            console.assert(!!this.props.onRemoveTodo);

            var self = this;
            var items = _.map(this.props.todoItems, function (todoItem) {
                void TodoItemView;
                return (<TodoItemView ref={todoItem.id} id={todoItem.id} completed={todoItem.completed}
                                      title={todoItem.title} onRemoveTodo={self.props.onRemoveTodo} />);
            });

            return (
                <div className="content">
                    <ul className="todos" ref="items">{items}</ul>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" ref="newTodoTitle" placeholder="buy milk" autofocus></input>
                    </form>
                </div>
            );
        },

        onSubmit: function (e) {
            e.nativeEvent.preventDefault();
            var newTodoTitle = this.refs.newTodoTitle.getDOMNode().value.trim();
            this.props.onNewTodo(newTodoTitle);
            this.refs.newTodoTitle.getDOMNode().value = '';
        }
    });

    return TodoListView;
});
