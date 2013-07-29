/** @jsx React.DOM */
define([
    'underscore', 'react', 'react-backbone'
], function (_, React) {
    'use strict';


    var TodoItemView = React.createClass({
        render: function () {
            console.assert(!!this.props.model);

            var id = this.props.model.id;
            var completed = this.props.model.get('completed');
            var title = this.props.model.get('title');

            var input = (completed
                ? <input type="checkbox" defaultChecked="yes" onClick={this.onToggleComplete} id={id} ref="checkbox"/>
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
            return false;
        },
        onRemove: function () {
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
                        <input type="text" ref="newTodoTitle" placeholder="buy milk" autofocus></input>
                    </form>
                </div>
            );
        },

        onNewTodo: function () {
            this.props.model.add({ title: this.refs.newTodoTitle, completed: false });
            return false;
        }
    });

    return TodoListView;
});
